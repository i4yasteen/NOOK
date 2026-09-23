export declare class EventoController {
    index(): {
        titulo: string;
        eventos: import("../../demo-store").EventoDemo[];
    };
    novo(): {
        titulo: string;
        evento: null;
    };
    criar(b: any): void;
    editar(id: string): {
        titulo: string;
        evento: import("../../demo-store").EventoDemo | null;
    };
    atualizar(id: string, b: any): void;
    excluir(id: string): void;
}
