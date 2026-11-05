import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { helpers } from './funcionario.view.helpers';
import { CreateFuncionarioDto } from './dtos/create-funcionario.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('funcionarios')
export class FuncionarioController {

    constructor(private readonly funcionarioService: FuncionarioService) {}

    @Get()
    @Render('funcionario/index')
    async getAll(): Promise<object> {
        let funcionarios = await this.funcionarioService.findAll(); 

        return { listaFuncionarios: funcionarios, _h: helpers }
    }

    @Get('novo')
    @Render('funcionario/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/funcionarios')
    @ValidationView('funcionario/formulario', ({ request, errors }) => {
        return {
            funcionario: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateFuncionarioDto): Promise<void> {
        await this.funcionarioService.create(dados);
    }

    @Get(':id/atualizacao')
    @Render('funcionario/formulario')
    async formularioAtualizacao(@Param('id') id: number): Promise<object> {

        const funcionario = await this.funcionarioService.findOne(id);

        if(!funcionario) {
            throw new Error('Funcionário não encontrado');
        }

        return { funcionario, _h: helpers };
    }

    @Post(':id/atualizacao')
    @Redirect('/funcionarios')
    @ValidationView('funcionario/formulario', ({ request, errors }) => {

        const { params, body } = request;

        return {
            funcionario: { id: params.id, ...body}, 
            errors
        };
    })
    async formularioAtualizacaoSalvar(@Param('id') id: number, @Body() dados: CreateFuncionarioDto): Promise<void> {
        await this.funcionarioService.update(id, dados);
    }
}
