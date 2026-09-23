import { BaseEntity } from 'typeorm';
export declare class Cliente extends BaseEntity {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    criadoEm: Date;
    atualizadoEm: Date;
}
