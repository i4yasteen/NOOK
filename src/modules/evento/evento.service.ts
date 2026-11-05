import { Injectable } from '@nestjs/common';
import { Evento } from './evento.entity';
import { CreateEventoDto } from './dtos/create-evento.dto';

@Injectable()
export class EventoService {

    async findAll(): Promise<Evento[]> {
        let eventos = await Evento.find();

        return eventos;
    }

    async findOne(_id: number): Promise<Evento | null> {
        return Evento.findOne({
            where: { id: _id }
        });
    }

    async create(dados: CreateEventoDto): Promise<Evento> {
        const evento = Evento.create({ ...dados });

        return evento.save();
    }

    async update(id: number, dados: CreateEventoDto): Promise<Evento | null> {
        const evento = await this.findOne(id);

        if(!evento) return null;

        Object.assign(evento, { ...dados });

        return evento.save();
    }
}
