import { BaseEntity } from 'typeorm';
export declare class Funcionario extends BaseEntity {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    funcao: string;
    criadoEm: Date;
    atualizadoEm: Date;
}
