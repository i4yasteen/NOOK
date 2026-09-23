import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('livros')
export class Livro extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column({ length: 200 }) titulo!: string;
  @Column({ length: 160 }) autor!: string;
  @Column({ type: 'int' }) ano!: number;
  @Column({ type: 'int', default: 0 }) estoque!: number;
  @Column({ length: 500, nullable: true }) imagem!: string | null;
  @CreateDateColumn() criadoEm!: Date;
  @UpdateDateColumn() atualizadoEm!: Date;
}
