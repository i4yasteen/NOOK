import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dtos/create-cliente.dto';
export declare class ClienteService {
    findAll(): Promise<Cliente[]>;
    findOne(_id: number): Promise<Cliente | null>;
    create(dados: CreateClienteDto): Promise<Cliente>;
    update(id: number, dados: CreateClienteDto): Promise<Cliente | null>;
    remove(id: number): Promise<void>;
}
