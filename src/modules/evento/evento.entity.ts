import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('eventos')
export class Evento extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column({ length: 200 }) titulo!: string;
  @Column({ type: 'text' }) descricao!: string;
  @Column({ type: 'date' }) data!: Date;
  @Column({ length: 5 }) horario!: string;
  @Column({ length: 200 }) local!: string;
  @Column({ type: 'int', default: 30 }) vagas!: number;
  @Column({ length: 500, nullable: true }) imagem!: string | null;
  @CreateDateColumn() criadoEm!: Date;
  @UpdateDateColumn() atualizadoEm!: Date;
}
