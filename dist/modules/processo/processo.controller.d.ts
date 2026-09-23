import { ProcessoService } from './processo.service';
export declare class ProcessoController {
    private readonly processoService;
    constructor(processoService: ProcessoService);
    getAll(): Promise<object>;
}
