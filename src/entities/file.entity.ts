import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class fileData {
    @PrimaryGeneratedColumn()
    fileId: number

    @Column()
    fileName: string

    @Column()
    filePath: string

    @Column()
    create_time: string

    @Column()
    file_suffix: string
}