import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class artList {
    @PrimaryGeneratedColumn()
    artId: number

    @Column()
    title: String

    @Column()
    date: String

    @Column()
    content: String
}