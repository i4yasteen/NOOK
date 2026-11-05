import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('livro')
export class Livro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 200 })
    titulo!: string;

    @Column({ type: 'varchar', length: 150 })
    autor!: string;

    @Column({ type: 'int' })
    ano!: number;

    @Column({ type: 'int' })
    quantidade!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    capa!: string;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
