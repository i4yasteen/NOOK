import { Body, Controller, Get, Param, Post, Redirect, Render, Req } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { helpers } from './reserva.view.helpers';
import { CreateReservaDto } from './dtos/create-reserva.dto';
import { ValidationView } from 'nest-validation-view';
import { Livro } from '../livro/livro.entity';

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
        const listaLivros = await Livro.find();
        return { listaLivros };
    }

    @Post('novo')
    @Redirect('/painel')
    @ValidationView('reserva/formulario', ({ request, errors }) => {
        return {
            reserva: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Req() req: any, @Body() dados: CreateReservaDto): Promise<void> {
        await this.reservaService.create({ ...dados, clienteId: req.nookUser.clientId, status: 'pendente', dataReserva: new Date() });
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
    @Redirect('/painel')
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

@Get(':id/exclusao')
@Render('reserva/exclusao')
async formularioExclusao(@Param('id') id: number): Promise<object> {
    const reserva = await this.reservaService.findOne(id);

    if (!reserva) {
        throw new Error('Reserva não encontrada');
    }

    return { reserva, _h: helpers };
}

@Post(':id/exclusao')
@Redirect('/painel')
async formularioExclusaoConfirmar(@Param('id') id: number): Promise<void> {
    await this.reservaService.remove(id);
}
}
