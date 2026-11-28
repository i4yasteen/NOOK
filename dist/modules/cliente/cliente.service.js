"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("./cliente.entity");
let ClienteService = class ClienteService {
    async findAll() {
        let clientes = await cliente_entity_1.Cliente.find();
        return clientes;
    }
    async findOne(_id) {
        return cliente_entity_1.Cliente.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const cliente = cliente_entity_1.Cliente.create({ ...dados });
        return cliente.save();
    }
    async update(id, dados) {
        const cliente = await this.findOne(id);
        if (!cliente)
            return null;
        Object.assign(cliente, { ...dados });
        return cliente.save();
    }
    async remove(id) {
        const cliente = await this.findOne(id);
        if (cliente) {
            await cliente.remove();
        }
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
//# sourceMappingURL=cliente.service.js.map