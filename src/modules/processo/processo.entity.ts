import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('processo')
export class Processo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    numero!: string;

    @Column({ type: 'date' })
    data!: Date;

    @Column({ type: 'varchar', length: 200 })
    interessado!: string;

    @Column({ type: 'varchar', length: 300 })
    assunto!: string;

    @Column({ type: 'text', nullable: true })
    descricao!: string;

    @Column({ type: 'varchar', length: 50 })
    situacao!: string;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
