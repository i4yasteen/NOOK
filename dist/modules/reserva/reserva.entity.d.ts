import { BaseEntity } from 'typeorm';
export declare class ReservaLivro extends BaseEntity {
    id: number;
    clienteId: number;
    livroId: number;
    dataReserva: Date;
    status: 'pendente' | 'concluida' | 'cancelada';
}
