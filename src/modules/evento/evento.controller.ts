import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { EventoService } from './evento.service';
import { helpers } from './evento.view.helpers';
import { CreateEventoDto } from './dtos/create-evento.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('eventos')
export class EventoController {

    constructor(private readonly eventoService: EventoService) {}

    @Get()
    @Render('evento/index')
    async getAll(): Promise<object> {
        let eventos = await this.eventoService.findAll(); 

        return { listaEventos: eventos, _h: helpers }
    }

    @Get('novo')
    @Render('evento/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/eventos')
    @ValidationView('evento/formulario', ({ request, errors }) => {
        return {
            evento: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateEventoDto): Promise<void> {
        await this.eventoService.create(dados);
    }

    @Get(':id/atualizacao')
    @Render('evento/formulario')
    async formularioAtualizacao(@Param('id') id: number): Promise<object> {

        const evento = await this.eventoService.findOne(id);

        if(!evento) {
            throw new Error('Evento não encontrado');
        }

        return { evento, _h: helpers };
    }

    @Post(':id/atualizacao')
    @Redirect('/eventos')
    @ValidationView('evento/formulario', ({ request, errors }) => {

        const { params, body } = request;

        return {
            evento: { id: params.id, ...body}, 
            errors
        };
    })
    async formularioAtualizacaoSalvar(@Param('id') id: number, @Body() dados: CreateEventoDto): Promise<void> {
        await this.eventoService.update(id, dados);
    }
}
