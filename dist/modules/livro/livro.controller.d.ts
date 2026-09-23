export declare class LivroController {
    index(): {
        titulo: string;
        livros: import("../../demo-store").LivroDemo[];
    };
    novo(): {
        titulo: string;
        livro: null;
    };
    criar(b: any): void;
    editar(id: string): {
        titulo: string;
        livro: import("../../demo-store").LivroDemo | null;
    };
    atualizar(id: string, b: any): void;
    excluir(id: string): void;
}
