"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioService = void 0;
const common_1 = require("@nestjs/common");
const funcionario_entity_1 = require("./funcionario.entity");
let FuncionarioService = class FuncionarioService {
    async findAll() {
        let funcionarios = await funcionario_entity_1.Funcionario.find();
        return funcionarios;
    }
    async findOne(_id) {
        return funcionario_entity_1.Funcionario.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const funcionario = funcionario_entity_1.Funcionario.create({ ...dados });
        return funcionario.save();
    }
    async update(id, dados) {
        const funcionario = await this.findOne(id);
        if (!funcionario)
            return null;
        Object.assign(funcionario, { ...dados });
        return funcionario.save();
    }
    async remove(id) {
        const funcionario = await this.findOne(id);
        if (funcionario) {
            await funcionario.remove();
        }
    }
};
exports.FuncionarioService = FuncionarioService;
exports.FuncionarioService = FuncionarioService = __decorate([
    (0, common_1.Injectable)()
], FuncionarioService);
//# sourceMappingURL=funcionario.service.js.map