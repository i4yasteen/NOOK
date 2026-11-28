"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const evento_entity_1 = require("./evento.entity");
let EventoService = class EventoService {
    async findAll() {
        let eventos = await evento_entity_1.Evento.find();
        return eventos;
    }
    async findOne(_id) {
        return evento_entity_1.Evento.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const evento = evento_entity_1.Evento.create({ ...dados });
        return evento.save();
    }
    async update(id, dados) {
        const evento = await this.findOne(id);
        if (!evento)
            return null;
        Object.assign(evento, { ...dados });
        return evento.save();
    }
    async remove(id) {
        const evento = await this.findOne(id);
        if (evento) {
            await evento.remove();
        }
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)()
], EventoService);
//# sourceMappingURL=evento.service.js.map