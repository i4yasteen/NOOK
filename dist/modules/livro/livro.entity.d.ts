import { BaseEntity } from 'typeorm';
export declare class Livro extends BaseEntity {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    estoque: number;
    imagem: string | null;
    criadoEm: Date;
    atualizadoEm: Date;
}
