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
exports.EventoController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("../../demo-store");
let EventoController = class EventoController {
    index() { return { titulo: 'Eventos', eventos: [...demo_store_1.eventos].sort((a, b) => a.data.getTime() - b.data.getTime()) }; }
    novo() { return { titulo: 'Cadastrar Evento', evento: null }; }
    criar(b) { demo_store_1.eventos.push({ id: demo_store_1.nextId.evento(), titulo: b.titulo, descricao: b.descricao, data: new Date(`${b.data}T00:00:00`), horario: b.horario, local: b.local, vagas: Number(b.vagas || 30), imagem: b.imagem || null }); }
    editar(id) { return { titulo: 'Editar Evento', evento: demo_store_1.eventos.find(e => e.id === Number(id)) || null }; }
    atualizar(id, b) { const e = demo_store_1.eventos.find(x => x.id === Number(id)); if (e)
        Object.assign(e, { titulo: b.titulo, descricao: b.descricao, data: new Date(`${b.data}T00:00:00`), horario: b.horario, local: b.local, vagas: Number(b.vagas || 30), imagem: b.imagem || null }); }
    excluir(id) { const i = demo_store_1.eventos.findIndex(x => x.id === Number(id)); if (i >= 0)
        demo_store_1.eventos.splice(i, 1); }
};
exports.EventoController = EventoController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('eventos/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('eventos/form'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/eventos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(':id/editar'),
    (0, common_1.Render)('eventos/form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "editar", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.Redirect)('/eventos'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Post)(':id/excluir'),
    (0, common_1.Redirect)('/eventos'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventoController.prototype, "excluir", null);
exports.EventoController = EventoController = __decorate([
    (0, common_1.Controller)('eventos')
], EventoController);
//# sourceMappingURL=evento.controller.js.map