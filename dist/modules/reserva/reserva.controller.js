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
exports.ReservaController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("../../demo-store");
let ReservaController = class ReservaController {
    index() { const cn = new Map(demo_store_1.clientes.map(x => [x.id, x.nome])), ln = new Map(demo_store_1.livros.map(x => [x.id, x.titulo])); return { titulo: 'Reservas de livros', reservas: demo_store_1.reservas.map(r => ({ ...r, clienteNome: cn.get(r.clienteId) || '—', livroTitulo: ln.get(r.livroId) || '—' })), clientes: demo_store_1.clientes, livros: demo_store_1.livros }; }
    criar(b) { const livro = demo_store_1.livros.find(l => l.id === Number(b.livroId)); if (!livro || livro.estoque < 1)
        return; demo_store_1.reservas.push({ id: demo_store_1.nextId.reserva(), clienteId: Number(b.clienteId), livroId: Number(b.livroId), dataReserva: new Date(), status: 'pendente' }); }
    status(id, b) { const r = demo_store_1.reservas.find(x => x.id === Number(id)); if (r)
        r.status = b.status; }
};
exports.ReservaController = ReservaController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('reservas/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/reservas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "criar", null);
__decorate([
    (0, common_1.Post)(':id/status'),
    (0, common_1.Redirect)('/reservas'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "status", null);
exports.ReservaController = ReservaController = __decorate([
    (0, common_1.Controller)('reservas')
], ReservaController);
//# sourceMappingURL=reserva.controller.js.map