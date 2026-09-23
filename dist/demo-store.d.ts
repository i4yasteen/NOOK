export type LivroDemo = {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    estoque: number;
    imagem: string | null;
};
export type EventoDemo = {
    id: number;
    titulo: string;
    descricao: string;
    data: Date;
    horario: string;
    local: string;
    vagas: number;
    imagem: string | null;
};
export type ClienteDemo = {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
};
export type FuncionarioDemo = {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    funcao: string;
};
export type ReservaDemo = {
    id: number;
    clienteId: number;
    livroId: number;
    dataReserva: Date;
    status: 'pendente' | 'concluida' | 'cancelada';
};
export type ParticipacaoDemo = {
    id: number;
    clienteId: number;
    eventoId: number;
    dataRegistro: Date;
};
export type ProcessoDemo = {
    id: number;
    numero: string;
    data: Date;
    interessado: string;
    assunto: string;
    descricao: string;
    situacao: string;
};
export declare const livros: LivroDemo[];
export declare const eventos: EventoDemo[];
export declare const clientes: ClienteDemo[];
export declare const funcionarios: FuncionarioDemo[];
export declare const reservas: ReservaDemo[];
export declare const participacoes: ParticipacaoDemo[];
export declare const processos: ProcessoDemo[];
export declare const nextId: {
    livro: () => number;
    evento: () => number;
    cliente: () => number;
    funcionario: () => number;
    reserva: () => number;
    participacao: () => number;
};
