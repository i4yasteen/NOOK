import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dtos/create-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(dados: CreateClienteDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateClienteDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
