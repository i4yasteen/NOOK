import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { ParticiparService } from './participar.service';
import { helpers } from './participar.view.helpers';
import { CreateParticiparDto } from './dtos/create-participar.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('participar')
export class ParticiparController {

    constructor(private readonly participarService: ParticiparService) {}

    @Get()
    @Render('participar/index')
    async getAll(): Promise<object> {
        let participacoes = await this.participarService.findAll(); 

        return { listaParticipacoes: participacoes, _h: helpers }
    }

    @Get('novo')
    @Render('participar/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/participar')
    @ValidationView('participar/formulario', ({ request, errors }) => {
        return {
            participar: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateParticiparDto): Promise<void> {
        await this.participarService.create(dados);
    }

    @Get(':id/atualizacao')
    @Render('participar/formulario')
    async formularioAtualizacao(@Param('id') id: number): Promise<object> {

        const participar = await this.participarService.findOne(id);

        if(!participar) {
            throw new Error('Participação não encontrada');
        }

        return { participar, _h: helpers };
    }

    @Post(':id/atualizacao')
    @Redirect('/participar')
    @ValidationView('participar/formulario', ({ request, errors }) => {

        const { params, body } = request;

        return {
            participar: { id: params.id, ...body}, 
            errors
        };
    })
    async formularioAtualizacaoSalvar(@Param('id') id: number, @Body() dados: CreateParticiparDto): Promise<void> {
        await this.participarService.update(id, dados);
    }
}
