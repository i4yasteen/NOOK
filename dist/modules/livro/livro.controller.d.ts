import { LivroService } from './livro.service';
import { CreateLivroDto } from './dtos/create-livro.dto';
export declare class LivroController {
    private readonly livroService;
    constructor(livroService: LivroService);
    getAll(): Promise<object>;
    formularioNovo(): Promise<object>;
    formularioNovoSalvar(dados: CreateLivroDto): Promise<void>;
    formularioAtualizacao(id: number): Promise<object>;
    formularioAtualizacaoSalvar(id: number, dados: CreateLivroDto): Promise<void>;
    formularioExclusao(id: number): Promise<object>;
    formularioExclusaoConfirmar(id: number): Promise<void>;
}
