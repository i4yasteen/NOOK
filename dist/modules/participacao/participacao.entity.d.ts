import { BaseEntity } from 'typeorm';
export declare class ParticipacaoEvento extends BaseEntity {
    id: number;
    clienteId: number;
    eventoId: number;
    dataRegistro: Date;
}
