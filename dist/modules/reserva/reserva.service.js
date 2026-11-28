"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaService = void 0;
const common_1 = require("@nestjs/common");
const reserva_entity_1 = require("./reserva.entity");
let ReservaService = class ReservaService {
    async findAll() {
        let reservas = await reserva_entity_1.Reserva.find();
        return reservas;
    }
    async findOne(_id) {
        return reserva_entity_1.Reserva.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const reserva = reserva_entity_1.Reserva.create({ ...dados });
        return reserva.save();
    }
    async update(id, dados) {
        const reserva = await this.findOne(id);
        if (!reserva)
            return null;
        Object.assign(reserva, { ...dados });
        return reserva.save();
    }
    async remove(id) {
        const reserva = await this.findOne(id);
        if (reserva) {
            await reserva.remove();
        }
    }
};
exports.ReservaService = ReservaService;
exports.ReservaService = ReservaService = __decorate([
    (0, common_1.Injectable)()
], ReservaService);
//# sourceMappingURL=reserva.service.js.map