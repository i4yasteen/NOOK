import { Injectable } from '@nestjs/common';
import { Reserva } from './reserva.entity';
import { CreateReservaDto } from './dtos/create-reserva.dto';

@Injectable()
export class ReservaService {

    async findAll(): Promise<Reserva[]> {
        let reservas = await Reserva.find();

        return reservas;
    }

    async findOne(_id: number): Promise<Reserva | null> {
        return Reserva.findOne({
            where: { id: _id }
        });
    }

    async create(dados: CreateReservaDto): Promise<Reserva> {
        const reserva = Reserva.create({ ...dados });

        return reserva.save();
    }

    async update(id: number, dados: CreateReservaDto): Promise<Reserva | null> {
        const reserva = await this.findOne(id);

        if(!reserva) return null;

        Object.assign(reserva, { ...dados });

        return reserva.save();
    }
}
