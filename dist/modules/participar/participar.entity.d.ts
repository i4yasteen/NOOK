import { BaseEntity } from "typeorm";
export declare class Participar extends BaseEntity {
    id: number;
    clienteId: number;
    eventoId: number;
    dataRegistro: Date;
    criadoEm: Date;
    atualizadoEm: Date;
}
