import { Reserva } from './reserva.entity';
import { CreateReservaDto } from './dtos/create-reserva.dto';
export declare class ReservaService {
    findAll(): Promise<Reserva[]>;
    findOne(_id: number): Promise<Reserva | null>;
    create(dados: CreateReservaDto): Promise<Reserva>;
    update(id: number, dados: CreateReservaDto): Promise<Reserva | null>;
    remove(id: number): Promise<void>;
}
