export declare class FuncionarioController {
    index(): {
        titulo: string;
        funcionarios: import("../../demo-store").FuncionarioDemo[];
    };
    novo(): {
        titulo: string;
        funcionario: null;
    };
    criar(b: any): void;
    editar(id: string): {
        titulo: string;
        funcionario: import("../../demo-store").FuncionarioDemo | null;
    };
    atualizar(id: string, b: any): void;
    excluir(id: string): void;
}
