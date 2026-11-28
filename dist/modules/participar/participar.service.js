"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticiparService = void 0;
const common_1 = require("@nestjs/common");
const participar_entity_1 = require("./participar.entity");
let ParticiparService = class ParticiparService {
    async findAll() {
        let participacoes = await participar_entity_1.Participar.find();
        return participacoes;
    }
    async findOne(_id) {
        return participar_entity_1.Participar.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const participar = participar_entity_1.Participar.create({ ...dados });
        return participar.save();
    }
    async update(id, dados) {
        const participar = await this.findOne(id);
        if (!participar)
            return null;
        Object.assign(participar, { ...dados });
        return participar.save();
    }
    async remove(id) {
        const participar = await this.findOne(id);
        if (participar) {
            await participar.remove();
        }
    }
};
exports.ParticiparService = ParticiparService;
exports.ParticiparService = ParticiparService = __decorate([
    (0, common_1.Injectable)()
], ParticiparService);
//# sourceMappingURL=participar.service.js.map