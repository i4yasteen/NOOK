import { Request, Response } from 'express';
export declare class AppController {
    inicio(): object;
    login(): object;
    entrar(req: Request, res: Response): void;
    sair(res: Response): void;
    painel(req: Request): object;
}
