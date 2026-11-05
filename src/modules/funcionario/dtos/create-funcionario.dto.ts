import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateFuncionarioDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    nome!: string;

    @IsNotEmpty({ message: 'O campo CPF é obrigatório' })
    cpf!: string;

    @IsNotEmpty({ message: 'O campo e-mail é obrigatório' })
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    email!: string;

    @IsNotEmpty({ message: 'O campo telefone é obrigatório' })
    telefone!: string;

    @IsNotEmpty({ message: 'O campo função é obrigatório' })
    funcao!: string;
}
