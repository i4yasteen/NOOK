import type { Response } from 'express';
export declare class AppController {
    home(): {
        titulo: string;
        livros: import("./demo-store").LivroDemo[];
        eventos: import("./demo-store").EventoDemo[];
    };
    login(): {
        titulo: string;
        layout: boolean;
    };
    loginPost(body: any, res: Response): void;
    logout(res: Response): void;
    painel(): {
        titulo: string;
        livros: number;
        eventos: number;
        clientes: number;
        funcionarios: number;
        reservas: number;
        participacoes: number;
    };
}
