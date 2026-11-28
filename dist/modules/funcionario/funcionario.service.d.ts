import { Funcionario } from './funcionario.entity';
import { CreateFuncionarioDto } from './dtos/create-funcionario.dto';
export declare class FuncionarioService {
    findAll(): Promise<Funcionario[]>;
    findOne(_id: number): Promise<Funcionario | null>;
    create(dados: CreateFuncionarioDto): Promise<Funcionario>;
    update(id: number, dados: CreateFuncionarioDto): Promise<Funcionario | null>;
    remove(id: number): Promise<void>;
}
