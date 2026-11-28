import { Participar } from './participar.entity';
import { CreateParticiparDto } from './dtos/create-participar.dto';
export declare class ParticiparService {
    findAll(): Promise<Participar[]>;
    findOne(_id: number): Promise<Participar | null>;
    create(dados: CreateParticiparDto): Promise<Participar>;
    update(id: number, dados: CreateParticiparDto): Promise<Participar | null>;
    remove(id: number): Promise<void>;
}
