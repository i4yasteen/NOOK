import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('evento')
export class Evento extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 200 })
    titulo!: string;

    @Column({ type: 'text', nullable: true })
    descricao!: string;

    @Column({ type: 'date' })
    data!: Date;

    @Column({ type: 'varchar', length: 10 })
    horario!: string;

    @Column({ type: 'varchar', length: 200 })
    local!: string;

    @Column({ type: 'int', default: 0 })
    vagas!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    banner!: string;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
