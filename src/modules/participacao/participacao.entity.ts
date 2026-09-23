import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('participacoes_evento')
@Unique(['clienteId', 'eventoId'])
export class ParticipacaoEvento extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column() clienteId!: number;
  @Column() eventoId!: number;
  @CreateDateColumn({ type: 'datetime' }) dataRegistro!: Date;
}
