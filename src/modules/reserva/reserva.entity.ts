import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('reserva')
export class Reserva extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'datetime' })
    dataReserva!: Date;

    @Column({ type: 'varchar', length: 30, default: 'pendente' })
    status!: string;

    @Column({ type: 'int' })
    clienteId!: number;

    @Column({ type: 'int' })
    livroId!: number;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
