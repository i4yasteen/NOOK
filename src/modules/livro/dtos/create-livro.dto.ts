import { IsNotEmpty, IsInt, Min } from "class-validator";

export class CreateLivroDto {

    @IsNotEmpty({ message: 'O campo título é obrigatório' })
    titulo!: string;

    @IsNotEmpty({ message: 'O campo autor é obrigatório' })
    autor!: string;

    @IsNotEmpty({ message: 'O campo ano é obrigatório' })
    @IsInt({ message: 'O ano deve ser um número inteiro' })
    ano!: number;

    @IsNotEmpty({ message: 'O campo quantidade é obrigatório' })
    @IsInt({ message: 'A quantidade deve ser um número inteiro' })
    @Min(0, { message: 'A quantidade não pode ser negativa' })
    quantidade!: number;

    capa?: string;
}
