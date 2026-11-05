import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { helpers } from './reserva.view.helpers';
import { CreateReservaDto } from './dtos/create-reserva.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('reservas')
export class ReservaController {

    constructor(private readonly reservaService: ReservaService) {}

    @Get()
    @Render('reserva/index')
    async getAll(): Promise<object> {
        let reservas = await this.reservaService.findAll(); 

        return { listaReservas: reservas, _h: helpers }
    }

    @Get('novo')
    @Render('reserva/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/reservas')
    @ValidationView('reserva/formulario', ({ request, errors }) => {
        return {
            reserva: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateReservaDto): Promise<void> {
        await this.reservaService.create(dados);
    }

    @Get(':id/atualizacao')
    @Render('reserva/formulario')
    async formularioAtualizacao(@Param('id') id: number): Promise<object> {

        const reserva = await this.reservaService.findOne(id);

        if(!reserva) {
            throw new Error('Reserva não encontrada');
        }

        return { reserva, _h: helpers };
    }

    @Post(':id/atualizacao')
    @Redirect('/reservas')
    @ValidationView('reserva/formulario', ({ request, errors }) => {

        const { params, body } = request;

        return {
            reserva: { id: params.id, ...body}, 
            errors
        };
    })
    async formularioAtualizacaoSalvar(@Param('id') id: number, @Body() dados: CreateReservaDto): Promise<void> {
        await this.reservaService.update(id, dados);
    }
}
