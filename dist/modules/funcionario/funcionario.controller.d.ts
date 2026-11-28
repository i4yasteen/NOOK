import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dtos/create-funcionario.dto';
export declare class FuncionarioController {
    private readonly funcionarioService;
    constructor(funcionarioService: FuncionarioService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(dados: CreateFuncionarioDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateFuncionarioDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
