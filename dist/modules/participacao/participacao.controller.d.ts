export declare class ParticipacaoController {
    index(): {
        titulo: string;
        participacoes: {
            clienteNome: string;
            eventoTitulo: string;
            id: number;
            clienteId: number;
            eventoId: number;
            dataRegistro: Date;
        }[];
        clientes: import("../../demo-store").ClienteDemo[];
        eventos: import("../../demo-store").EventoDemo[];
    };
    criar(b: any): void;
}
