import { IsNotEmpty, IsInt, IsIn } from "class-validator";

export class CreateReservaDto {

    @IsNotEmpty({ message: 'O campo data da reserva é obrigatório' })
    dataReserva!: Date;

    @IsNotEmpty({ message: 'O campo status é obrigatório' })
    @IsIn(['pendente', 'concluida', 'cancelada'], { message: 'Status inválido' })
    status!: string;

    @IsNotEmpty({ message: 'O campo cliente é obrigatório' })
    @IsInt({ message: 'O cliente deve ser um número inteiro' })
    clienteId!: number;

    @IsNotEmpty({ message: 'O campo livro é obrigatório' })
    @IsInt({ message: 'O livro deve ser um número inteiro' })
    livroId!: number;
}
