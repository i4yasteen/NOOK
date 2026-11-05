import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario.entity';
import { CreateFuncionarioDto } from './dtos/create-funcionario.dto';

@Injectable()
export class FuncionarioService {

    async findAll(): Promise<Funcionario[]> {
        let funcionarios = await Funcionario.find();

        return funcionarios;
    }

    async findOne(_id: number): Promise<Funcionario | null> {
        return Funcionario.findOne({
            where: { id: _id }
        });
    }

    async create(dados: CreateFuncionarioDto): Promise<Funcionario> {
        const funcionario = Funcionario.create({ ...dados });

        return funcionario.save();
    }

    async update(id: number, dados: CreateFuncionarioDto): Promise<Funcionario | null> {
        const funcionario = await this.findOne(id);

        if(!funcionario) return null;

        Object.assign(funcionario, { ...dados });

        return funcionario.save();
    }
}
