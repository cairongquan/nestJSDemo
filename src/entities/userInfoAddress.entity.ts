import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class userinfoAddress {
    @PrimaryColumn()
    userId: number
    
    @Column()
    address: string
    
    @Column()
    phone: string
    
    @Column()
    city: string
}
