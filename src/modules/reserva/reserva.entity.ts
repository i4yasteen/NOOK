import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservas_livro')
export class ReservaLivro extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column() clienteId!: number;
  @Column() livroId!: number;
  @CreateDateColumn({ type: 'datetime' }) dataReserva!: Date;
  @Column({ length: 20, default: 'pendente' }) status!: 'pendente' | 'concluida' | 'cancelada';
}
