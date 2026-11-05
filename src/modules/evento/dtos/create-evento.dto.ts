import { IsNotEmpty, IsInt, Min } from "class-validator";

export class CreateEventoDto {

    @IsNotEmpty({ message: 'O campo título é obrigatório' })
    titulo!: string;

    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    descricao!: string;

    @IsNotEmpty({ message: 'O campo data é obrigatório' })
    data!: Date;

    @IsNotEmpty({ message: 'O campo horário é obrigatório' })
    horario!: string;

    @IsNotEmpty({ message: 'O campo local é obrigatório' })
    local!: string;

    @IsInt({ message: 'As vagas devem ser um número inteiro' })
    @Min(0, { message: 'As vagas não podem ser negativas' })
    vagas!: number;

    banner?: string;
}
