export declare class ClienteController {
    index(): {
        titulo: string;
        clientes: import("../../demo-store").ClienteDemo[];
    };
    novo(): {
        titulo: string;
        cliente: null;
    };
    criar(b: any): void;
    editar(id: string): {
        titulo: string;
        cliente: import("../../demo-store").ClienteDemo | null;
    };
    atualizar(id: string, b: any): void;
    excluir(id: string): void;
}
