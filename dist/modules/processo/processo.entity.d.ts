import { BaseEntity } from "typeorm";
export declare class Processo extends BaseEntity {
    id: number;
    numero: string;
    data: Date;
    interessado: string;
    assunto: string;
    descricao: string;
    situacao: string;
    criadoEm: Date;
    atualizadoEm: Date;
}
