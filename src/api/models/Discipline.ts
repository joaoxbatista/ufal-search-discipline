import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {ClassTime} from "./ClassTime";

@Entity()
export class Discipline {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    classHours: number;

    @Column()
    availableVacancies: number;

    @Column()
    filledVacancies: number;

    @Column()
    teacher: string;

    @Column()
    course: string;

    @OneToMany(() => ClassTime, classTimes => classTimes.discipline, {cascade: true})
    classTimes: ClassTime[];

}
