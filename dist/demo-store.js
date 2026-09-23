"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextId = exports.processos = exports.participacoes = exports.reservas = exports.funcionarios = exports.clientes = exports.eventos = exports.livros = void 0;
exports.livros = [
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899, estoque: 4, imagem: null },
    { id: 2, titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', ano: 1977, estoque: 3, imagem: null },
    { id: 3, titulo: 'O Cortiço', autor: 'Aluísio Azevedo', ano: 1890, estoque: 2, imagem: null },
    { id: 4, titulo: 'Torto Arado', autor: 'Itamar Vieira Junior', ano: 2019, estoque: 5, imagem: null },
    { id: 5, titulo: 'Quarto de Despejo', autor: 'Carolina Maria de Jesus', ano: 1960, estoque: 2, imagem: null },
    { id: 6, titulo: 'Vidas Secas', autor: 'Graciliano Ramos', ano: 1938, estoque: 1, imagem: null },
];
exports.eventos = [
    { id: 1, titulo: 'Clube do Livro', descricao: 'Encontro mensal para conversar sobre literatura brasileira.', data: new Date('2026-10-10T00:00:00'), horario: '18:30', local: 'Nook Cafeteria e Sebo', vagas: 30, imagem: null },
    { id: 2, titulo: 'Sarau na Nook', descricao: 'Noite de poesia, música e leitura aberta.', data: new Date('2026-10-24T00:00:00'), horario: '19:00', local: 'Nook Cafeteria e Sebo', vagas: 40, imagem: null },
    { id: 3, titulo: 'Troca de Livros', descricao: 'Traga um livro e participe da nossa feira de trocas.', data: new Date('2026-11-07T00:00:00'), horario: '15:00', local: 'Nook Cafeteria e Sebo', vagas: 50, imagem: null },
];
exports.clientes = [{ id: 1, nome: 'Ana Souza', cpf: '000.000.000-00', email: 'ana@example.com', telefone: '(69) 99999-0000', endereco: 'Ji-Paraná/RO' }];
exports.funcionarios = [{ id: 1, nome: 'Taynara Melo', cpf: '111.111.111-11', email: 'taynara@nook.local', telefone: '(69) 99999-1111', funcao: 'Administradora' }];
exports.reservas = [];
exports.participacoes = [];
exports.processos = [{ id: 1, numero: 'NOOK-001/2026', data: new Date('2026-09-20'), interessado: 'Nook Cafeteria e Sebo', assunto: 'Projeto Web', descricao: 'Demonstração do projeto.', situacao: 'Em andamento' }];
let livroId = 7, eventoId = 4, clienteId = 2, funcionarioId = 2, reservaId = 1, participacaoId = 1;
exports.nextId = { livro: () => livroId++, evento: () => eventoId++, cliente: () => clienteId++, funcionario: () => funcionarioId++, reserva: () => reservaId++, participacao: () => participacaoId++ };
//# sourceMappingURL=demo-store.js.map