import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Discipline} from "./Discipline";

@Entity()
export class ClassTime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    day: string;

    @Column()
    start: string;

    @Column()
    end: string;

    @ManyToOne(() => Discipline, discipline => discipline.classTimes)
    discipline: Discipline;
}
