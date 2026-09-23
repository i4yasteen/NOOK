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
exports.LivroController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("../../demo-store");
let LivroController = class LivroController {
    index() { return { titulo: 'Livros', livros: [...demo_store_1.livros].sort((a, b) => b.id - a.id) }; }
    novo() { return { titulo: 'Cadastrar Livro', livro: null }; }
    criar(b) { demo_store_1.livros.push({ id: demo_store_1.nextId.livro(), titulo: b.titulo, autor: b.autor, ano: Number(b.ano), estoque: Number(b.estoque), imagem: b.imagem || null }); }
    editar(id) { return { titulo: 'Editar Livro', livro: demo_store_1.livros.find(l => l.id === Number(id)) || null }; }
    atualizar(id, b) { const l = demo_store_1.livros.find(x => x.id === Number(id)); if (l)
        Object.assign(l, { titulo: b.titulo, autor: b.autor, ano: Number(b.ano), estoque: Number(b.estoque), imagem: b.imagem || null }); }
    excluir(id) { const i = demo_store_1.livros.findIndex(x => x.id === Number(id)); if (i >= 0)
        demo_store_1.livros.splice(i, 1); }
};
exports.LivroController = LivroController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('livros/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('livros/form'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/livros'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(':id/editar'),
    (0, common_1.Render)('livros/form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "editar", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.Redirect)('/livros'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Post)(':id/excluir'),
    (0, common_1.Redirect)('/livros'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "excluir", null);
exports.LivroController = LivroController = __decorate([
    (0, common_1.Controller)('livros')
], LivroController);
//# sourceMappingURL=livro.controller.js.map