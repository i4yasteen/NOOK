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
exports.ParticipacaoController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("../../demo-store");
let ParticipacaoController = class ParticipacaoController {
    index() { const cn = new Map(demo_store_1.clientes.map(x => [x.id, x.nome])), en = new Map(demo_store_1.eventos.map(x => [x.id, x.titulo])); return { titulo: 'Participações em eventos', participacoes: demo_store_1.participacoes.map(p => ({ ...p, clienteNome: cn.get(p.clienteId) || '—', eventoTitulo: en.get(p.eventoId) || '—' })), clientes: demo_store_1.clientes, eventos: demo_store_1.eventos }; }
    criar(b) { const clienteId = Number(b.clienteId), eventoId = Number(b.eventoId); if (!demo_store_1.participacoes.some(p => p.clienteId === clienteId && p.eventoId === eventoId))
        demo_store_1.participacoes.push({ id: demo_store_1.nextId.participacao(), clienteId, eventoId, dataRegistro: new Date() }); }
};
exports.ParticipacaoController = ParticipacaoController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('participacoes/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipacaoController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/participacoes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParticipacaoController.prototype, "criar", null);
exports.ParticipacaoController = ParticipacaoController = __decorate([
    (0, common_1.Controller)('participacoes')
], ParticipacaoController);
//# sourceMappingURL=participacao.controller.js.map