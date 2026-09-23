import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('funcionarios')
export class Funcionario extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column({ length: 160 }) nome!: string;
  @Column({ length: 14, unique: true }) cpf!: string;
  @Column({ length: 180, unique: true }) email!: string;
  @Column({ length: 30 }) telefone!: string;
  @Column({ length: 100 }) funcao!: string;
  @CreateDateColumn() criadoEm!: Date;
  @UpdateDateColumn() atualizadoEm!: Date;
}
