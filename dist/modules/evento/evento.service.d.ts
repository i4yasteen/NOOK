import { Evento } from './evento.entity';
import { CreateEventoDto } from './dtos/create-evento.dto';
export declare class EventoService {
    findAll(): Promise<Evento[]>;
    findOne(_id: number): Promise<Evento | null>;
    create(dados: CreateEventoDto): Promise<Evento>;
    update(id: number, dados: CreateEventoDto): Promise<Evento | null>;
    remove(id: number): Promise<void>;
}
