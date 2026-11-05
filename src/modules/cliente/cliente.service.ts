import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dtos/create-cliente.dto';

@Injectable()
export class ClienteService {

    async findAll(): Promise<Cliente[]> {
        let clientes = await Cliente.find();

        return clientes;
    }

    async findOne(_id: number): Promise<Cliente | null> {
        return Cliente.findOne({
            where: { id: _id }
        });
    }

    async create(dados: CreateClienteDto): Promise<Cliente> {
        const cliente = Cliente.create({ ...dados });

        return cliente.save();
    }

    async update(id: number, dados: CreateClienteDto): Promise<Cliente | null> {
        const cliente = await this.findOne(id);

        if(!cliente) return null;

        Object.assign(cliente, { ...dados });

        return cliente.save();
    }
}
