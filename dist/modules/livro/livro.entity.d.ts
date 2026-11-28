import { BaseEntity } from "typeorm";
export declare class Livro extends BaseEntity {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    quantidade: number;
    capa: string;
    criadoEm: Date;
    atualizadoEm: Date;
}
