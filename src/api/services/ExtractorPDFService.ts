import { PDFExtract } from 'pdf.js-extract';

export class ExtractorPDFService {
  private extractor: PDFExtract;
  private options = {};
  public disciplines: Array<any>;

  constructor() {
    this.extractor = new PDFExtract();
    this.disciplines = [];
  }

  public async parsePDFToDisciplines(filePath: string) {
    const data = await this.extractor.extract(filePath, this.options);
    const { pages } = data;
    const content = this.mergeContentOfPages(pages);
    this.disciplines = this.generateDisciplines(content);
    return this.disciplines;
  }

  private mergeContentOfPages(pages: any[]) {
    let content: any[] = [];
    pages.forEach((page) => {
      content = [...content, ...page.content];
    });
    return content;
  }

  private generateDisciplines(content: any[]) {
    const disciplines = this.filterDisciplines(content);
    const availableVacancies = this.filterAvailableVacancies(content);
    const { filledVacancies, filledVacanciesIndex } =
      this.filterFilledVacancies(content);
    const { teachers, teachersIndex } = this.filterTeachers(content);
    const classHours = this.filterClassHours(content);
    const course = this.filterCourse(content);
    const classSchedules = this.filterClassSchedule(
      content,
      filledVacanciesIndex,
      teachersIndex,
    );
    const arrayLengths = [
      disciplines.length,
      availableVacancies.length,
      filledVacancies.length,
      teachers.length,
      classHours.length,
    ];
    const avg =
      arrayLengths.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ) / arrayLengths.length;
    if (avg != disciplines.length) {
      return [];
    }
    const filledDisciplines = [];
    for (let i = 0; i < avg; i++) {
      filledDisciplines[i] = {
        name: disciplines[i],
        teacher: teachers[i],
        classHours: classHours[i],
        availableVacancies: availableVacancies[i],
        filledVacancies: filledVacancies[i],
        classTimes: classSchedules[i],
        course,
      };
    }

    return filledDisciplines;
  }



  private filterClassSchedule(
    content: string | any[],
    filledVacanciesIndex: any[],
    teachersIndex: any[],
  ) {
    filledVacanciesIndex.shift();
    filledVacanciesIndex.push({ index: content.length - 1 });
    let schedules = [];
    for (let i = 0; i < filledVacanciesIndex.length; i++) {
      const contentSchedule = content.slice(
        teachersIndex[i].index,
        filledVacanciesIndex[i].index,
      );
      const days = this.filterDays(contentSchedule);
      const times = this.filterTimes(contentSchedule);
      const daysTimes = [];
      for (let i = 0; i < days.length; i++) {
        daysTimes[i] = {
          day: days[i],
          ...times[i],
        };
      }
      schedules[i] = daysTimes;
    }
    return schedules;
  }

  private filterContent(content: any[], filter: { x: any; regex: any }) {
    return content.filter((contentItem: { x: any; str: any }) => {
      const x = contentItem.x === filter.x;
      const match = !!filter.regex.test(contentItem.str);
      return x && match;
    });
  }

  private filterCourse(content: any[]) {
    const regexReplace = /(.*Semestre\s-\s)|(\s-\s.*\s-)/gm;
    const filter = {
      x: 20,
      regex: /(.*Semestre\s-\s).*(\s-\s.*\s-)/gm,
    };
    return this.filterContent(content, filter).map(
        (contentItem: { str: string }) =>
            contentItem.str.replace(regexReplace, '').toUpperCase(),
    )[0];
  }

  public filterDisciplines(content: any[]) {
    const filter = {
      x: 25,
      regex: /^CPT.*/gm,
    };
    return this.filterContent(content, filter).map(
      (contentItem: { str: any }) => contentItem.str,
    );
  }

  private filterAvailableVacancies(content: any[]) {
    const regexReplace = /^(Vagas Oferecidas:\s*)/gm;
    const filter = {
      x: 25,
      regex: /^Vagas Oferecidas:.*/gm,
    };
    return this.filterContent(content, filter).map(
      (contentItem: { str: string }) =>
        parseInt(contentItem.str.replace(regexReplace, '')),
    );
  }

  private filterFilledVacancies(content: any[]) {
    const regexReplace = /^(Vagas Ocupadas:\s*)/gm;
    const filter = {
      x: 170,
      regex: /^Vagas Ocupadas:.*/gm,
    };
    const filledVacancies = this.filterContent(content, filter);
    const filledVacanciesIndex: { index: number; data: string }[] = [];
    filledVacancies.forEach((filledVacancy: any) => {
      filledVacanciesIndex.push({
        index: content.indexOf(filledVacancy) - 1,
        data: JSON.stringify(filledVacancy),
      });
    });
    return {
      filledVacancies: filledVacancies.map((contentItem: { str: string }) =>
        parseInt(contentItem.str.replace(regexReplace, '')),
      ),
      filledVacanciesIndex,
    };
  }

  private filterTeachers(content: any[]) {
    const filter = {
      x: 344,
      regex: /([A-Z]|\s)*/gm,
    };
    const teachers = this.filterContent(content, filter);
    const teachersIndex: { index: any; data: string }[] = [];
    teachers.forEach((teacher: any) => {
      teachersIndex.push({
        index: content.indexOf(teacher) + 1,
        data: JSON.stringify(teacher),
      });
    });

    return {
      teachers: teachers.map((contentItem: { str: any }) => contentItem.str),
      teachersIndex,
    };
  }

  private filterClassHours(content: any[]) {
    const regexReplace = /^(CH:)|\s(horas)$/gm;
    const filter = {
      x: 323,
      regex: /CH:*/gm,
    };

    return this.filterContent(content, filter).map(
      (contentItem: { str: string }) =>
        parseInt(contentItem.str.replace(regexReplace, '')),
    );
  }

  private filterDays(content: any) {
    const regexReplace = /^\s|-feira$/gm;
    const filter = {
      x: 177,
      regex: /.*-(feira)$|(Sábado)|(Domingo)/gm,
    };

    return this.filterContent(content, filter).map(
      (contentItem: { str: string }) =>
        contentItem.str.replace(regexReplace, ''),
    );
  }

  private filterTimes(content: any) {
    const regexReplace = /[^(\d\d:\d\d\s-\s\d\d:\d\d)]/gm;
    const filter = {
      x: 277,
      regex: /\d\d:\d\d\s-\s\d\d:\d\d/gm,
    };

    return this.filterContent(content, filter).map( (contentItem: { str: string }) => {
      const result = contentItem.str.replace(regexReplace, '');
      const times = result.split(' - ');
      return {
        start: times[0],
        end: times[1]
      };
    });
  }
}
