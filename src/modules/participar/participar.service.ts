import { Injectable } from '@nestjs/common';
import { Participar } from './participar.entity';
import { CreateParticiparDto } from './dtos/create-participar.dto';

@Injectable()
export class ParticiparService {

    async findAll(): Promise<Participar[]> {
        let participacoes = await Participar.find();

        return participacoes;
    }

    async findOne(_id: number): Promise<Participar | null> {
        return Participar.findOne({
            where: { id: _id }
        });
    }

    async create(dados: CreateParticiparDto): Promise<Participar> {
        const participar = Participar.create({ ...dados });

        return participar.save();
    }

    async update(id: number, dados: CreateParticiparDto): Promise<Participar | null> {
        const participar = await this.findOne(id);

        if(!participar) return null;

        Object.assign(participar, { ...dados });

        return participar.save();
    }
}
