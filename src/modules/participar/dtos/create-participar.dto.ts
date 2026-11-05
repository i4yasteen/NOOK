import { IsNotEmpty, IsInt } from "class-validator";

export class CreateParticiparDto {

    @IsNotEmpty({ message: 'O campo cliente é obrigatório' })
    @IsInt({ message: 'O cliente deve ser um número inteiro' })
    clienteId!: number;

    @IsNotEmpty({ message: 'O campo evento é obrigatório' })
    @IsInt({ message: 'O evento deve ser um número inteiro' })
    eventoId!: number;

    @IsNotEmpty({ message: 'O campo data de registro é obrigatório' })
    dataRegistro!: Date;
}
