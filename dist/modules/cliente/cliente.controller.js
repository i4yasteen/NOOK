"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("../../demo-store");
let ClienteController = class ClienteController {
    index() { return { titulo: 'Clientes', clientes: [...demo_store_1.clientes].sort((a, b) => a.nome.localeCompare(b.nome)) }; }
    novo() { return { titulo: 'Cadastrar Cliente', cliente: null }; }
    criar(b) { demo_store_1.clientes.push({ id: demo_store_1.nextId.cliente(), nome: b.nome, cpf: b.cpf, email: b.email, telefone: b.telefone, endereco: b.endereco }); }
    editar(id) { return { titulo: 'Editar Cliente', cliente: demo_store_1.clientes.find(c => c.id === Number(id)) || null }; }
    atualizar(id, b) { const c = demo_store_1.clientes.find(x => x.id === Number(id)); if (c)
        Object.assign(c, { nome: b.nome, cpf: b.cpf, email: b.email, telefone: b.telefone, endereco: b.endereco }); }
    excluir(id) { const i = demo_store_1.clientes.findIndex(x => x.id === Number(id)); if (i >= 0)
        demo_store_1.clientes.splice(i, 1); }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('clientes/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('clientes/form'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/clientes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(':id/editar'),
    (0, common_1.Render)('clientes/form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "editar", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.Redirect)('/clientes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Post)(':id/excluir'),
    (0, common_1.Redirect)('/clientes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "excluir", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('clientes')
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map