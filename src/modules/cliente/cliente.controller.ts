import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { helpers } from './cliente.view.helpers';
import { CreateClienteDto } from './dtos/create-cliente.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('clientes')
export class ClienteController {

    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    @Render('cliente/index')
    async getAll(): Promise<object> {
        let clientes = await this.clienteService.findAll(); 

        return { listaClientes: clientes, _h: helpers }
    }

    @Get('novo')
    @Render('cliente/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/clientes')
    @ValidationView('cliente/formulario', ({ request, errors }) => {
        return {
            cliente: request.body, 
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateClienteDto): Promise<void> {
        await this.clienteService.create(dados);
    }

    @Get(':id/atualizacao')
    @Render('cliente/formulario')
    async formularioAtualizacao(@Param('id') id: number): Promise<object> {

        const cliente = await this.clienteService.findOne(id);

        if(!cliente) {
            throw new Error('Cliente não encontrado');
        }

        return { cliente, _h: helpers };
    }

    @Post(':id/atualizacao')
    @Redirect('/clientes')
    @ValidationView('cliente/formulario', ({ request, errors }) => {

        const { params, body } = request;

        return {
            cliente: { id: params.id, ...body}, 
            errors
        };
    })
    async formularioAtualizacaoSalvar(@Param('id') id: number, @Body() dados: CreateClienteDto): Promise<void> {
        await this.clienteService.update(id, dados);
    }
}
