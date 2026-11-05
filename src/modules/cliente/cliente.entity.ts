import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cliente')
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 150 })
    nome!: string;

    @Column({ type: 'varchar', length: 14, unique: true })
    cpf!: string;

    @Column({ type: 'varchar', length: 150 })
    email!: string;

    @Column({ type: 'varchar', length: 20 })
    telefone!: string;

    @Column({ type: 'varchar', length: 255 })
    endereco!: string;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;
}
