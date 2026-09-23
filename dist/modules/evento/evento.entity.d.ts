import { BaseEntity } from 'typeorm';
export declare class Evento extends BaseEntity {
    id: number;
    titulo: string;
    descricao: string;
    data: Date;
    horario: string;
    local: string;
    vagas: number;
    imagem: string | null;
    criadoEm: Date;
    atualizadoEm: Date;
}
