import { EventoService } from './evento.service';
import { CreateEventoDto } from './dtos/create-evento.dto';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(dados: CreateEventoDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateEventoDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
