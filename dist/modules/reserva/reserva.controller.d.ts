export declare class ReservaController {
    index(): {
        titulo: string;
        reservas: {
            clienteNome: string;
            livroTitulo: string;
            id: number;
            clienteId: number;
            livroId: number;
            dataReserva: Date;
            status: "pendente" | "concluida" | "cancelada";
        }[];
        clientes: import("../../demo-store").ClienteDemo[];
        livros: import("../../demo-store").LivroDemo[];
    };
    criar(b: any): void;
    status(id: string, b: any): void;
}
