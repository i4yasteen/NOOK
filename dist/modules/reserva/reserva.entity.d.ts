import { BaseEntity } from "typeorm";
export declare class Reserva extends BaseEntity {
    id: number;
    dataReserva: Date;
    status: string;
    clienteId: number;
    livroId: number;
    criadoEm: Date;
    atualizadoEm: Date;
}
