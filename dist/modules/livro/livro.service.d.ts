import { Livro } from './livro.entity';
import { CreateLivroDto } from './dtos/create-livro.dto';
export declare class LivroService {
    findAll(): Promise<Livro[]>;
    findOne(_id: number): Promise<Livro | null>;
    create(dados: CreateLivroDto): Promise<Livro>;
    update(id: number, dados: CreateLivroDto): Promise<Livro | null>;
    remove(id: number): Promise<void>;
}
