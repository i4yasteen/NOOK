import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dtos/create-reserva.dto';
export declare class ReservaController {
    private readonly reservaService;
    constructor(reservaService: ReservaService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(req: any, dados: CreateReservaDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateReservaDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
