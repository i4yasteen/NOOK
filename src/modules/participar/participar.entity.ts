import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('participar')
export class Participar extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    clienteId!: number;

    @Column({ type: 'int' })
    eventoId!: number;

    @Column({ type: 'datetime' })
    dataRegistro!: Date;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
