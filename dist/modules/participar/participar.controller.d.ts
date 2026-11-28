import { ParticiparService } from './participar.service';
import { CreateParticiparDto } from './dtos/create-participar.dto';
export declare class ParticiparController {
    private readonly participarService;
    constructor(participarService: ParticiparService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(req: any, dados: CreateParticiparDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateParticiparDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
