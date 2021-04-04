import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// 用户信息表
// 实体类映射数据库表 
@Entity()
export class userinfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sex: string
}