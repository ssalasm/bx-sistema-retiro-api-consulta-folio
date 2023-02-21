import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Folio {

    @PrimaryGeneratedColumn()
    pickup_id: number;

    @Column()
    pickup_num: number;

    @Column()
    status: string;

    @Column()
    creation_date: Date;

    @Column()
    update_date: Date;
    
}
