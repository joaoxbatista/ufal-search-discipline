const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const filePath = './files/cc.pdf';
const options = {};

const main = () => {
    pdfExtract.extract(filePath, options, (err, data) => {
        if (err) return console.log(err);
        if (data) {
            const {pages} = data;
            const content = mergeContentOfPages(pages);
            const result = generateDisciplines(content);
            console.log(JSON.stringify(result));
        }
    });
}

const mergeContentOfPages = (pages) => {
    let content = [];
    pages.forEach(page => {
        content = [...content, ...page.content];
    });
    return content;
}

const generateDisciplines = (content) => {
    const disciplines = filterDisciplines(content);
    const availableVacancies = filterAvailableVacancies(content);
    const {filledVacancies, filledVacanciesIndex} = filterFilledVacancies(content);
    const {teachers, teachersIndex} = filterTeachers(content);
    const classHours = filterClassHours(content);
    const hours = filterSchedule(content, filledVacanciesIndex, teachersIndex);
    const arrayLengths = [disciplines.length, availableVacancies.length, filledVacancies.length, teachers.length, classHours.length];
    const avg = arrayLengths.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / arrayLengths.length;

    if (avg != disciplines.length) {
        return [];
    }
    const filledDisciplines = [];
    for (let i = 0; i < avg; i++) {
        filledDisciplines[i] = {
            discipline: disciplines[i],
            teacher: teachers[i],
            classHours: classHours[i],
            availableVacancies: availableVacancies[i],
            filledVacancies: filledVacancies[i],
            hours: hours[i],
        }
    }
    return filledDisciplines;
}

const filterSchedule = (content, filledVacanciesIndex, teachersIndex) => {
    filledVacanciesIndex.shift();
    filledVacanciesIndex.push({ index: content.length - 1 });
    let schedules = [];
    for(let i = 0; i < filledVacanciesIndex.length; i++) {
        const contentSchedule = content.slice(teachersIndex[i].index, filledVacanciesIndex[i].index);
        const days = filterDays(contentSchedule);
        const times = filterTimes(contentSchedule);
        const daysTimes = [];
        for(let i = 0; i < days.length; i++) {
            daysTimes[i] = {
                day: days[i],
                time: times[i]
            };
        }
        schedules[i] = daysTimes;
    }
    return schedules;
}

const filterContent = (content, filter) => {
    return content.filter(contentItem => {
        const x = contentItem.x === filter.x;
        const height = contentItem.height === filter.height;
        const dir = contentItem.dir === filter.dir;
        const match = !!filter.regex.test(contentItem.str);
        return x && height && dir && match;
    })
}

const filterDisciplines = (content) => {
    const filter = {
        x: 25,
        height: 10,
        dir: 'ltr',
        regex: /^CPT.*/gm
    };
    return filterContent(content, filter).map(contentItem => contentItem.str);
}

const filterAvailableVacancies = (content) => {
    const regexReplace = /^(Vagas Oferecidas:\s*)/gm;
    const filter = {
        x: 25,
        height: 10,
        dir: 'ltr',
        regex: /^Vagas Oferecidas:.*/gm
    };
    return filterContent(content, filter).map(contentItem => parseInt(contentItem.str.replace(regexReplace, '')));
}

const filterFilledVacancies = (content) => {
    const regexReplace = /^(Vagas Ocupadas:\s*)/gm;
    const filter = {
        x: 170,
        height: 10,
        dir: 'ltr',
        regex: /^Vagas Ocupadas:.*/gm
    };
    const filledVacancies = filterContent(content, filter);
    const filledVacanciesIndex = [];
    filledVacancies.forEach(filledVacancy => {
        filledVacanciesIndex.push({
            index: content.indexOf(filledVacancy)-1,
            data: JSON.stringify(filledVacancy),
        });
    });
    return {
        filledVacancies: filledVacancies.map(contentItem => parseInt(contentItem.str.replace(regexReplace, ''))),
        filledVacanciesIndex,
    };
}

const filterTeachers = (content) => {
    const filter = {
        x: 344,
        height: 10,
        dir: 'ltr',
        regex: /([A-Z]|\s)*/gm
    };
    const teachers = filterContent(content, filter);
    const teachersIndex = [];
    teachers.forEach(teacher => {
        teachersIndex.push({
            index: content.indexOf(teacher)+1,
            data: JSON.stringify(teacher),
        });
    });
    return {
        teachers: teachers.map(contentItem => contentItem.str),
        teachersIndex,
    };
}

const filterClassHours = (content) => {
    const regexReplace = /^(CH:)|\s(horas)$/gm;
    const filter = {
        x: 323,
        height: 10,
        dir: 'ltr',
        regex: /CH:*/gm
    };
    return filterContent(content, filter).map(contentItem => parseInt(contentItem.str.replace(regexReplace, '')));
}

const filterDays = (content) => {
    const regexReplace = /^\s|-feira$/gm;
    const filter = {
        x: 177,
        height: 10,
        dir: 'ltr',
        regex: /.*-(feira)$|(Sábado)|(Domingo)/gm
    };

    return filterContent(content, filter).map(contentItem => contentItem.str.replace(regexReplace, ''));
}

const filterTimes = (content) => {
    const regexReplace = /[^(\d\d:\d\d\s-\s\d\d:\d\d)]/gm;
    const filter = {
        x: 277,
        height: 10,
        dir: 'ltr',
        regex: /\d\d:\d\d\s-\s\d\d:\d\d/gm
    };

    return filterContent(content, filter).map(contentItem => contentItem.str.replace(regexReplace, ''));
}


main();