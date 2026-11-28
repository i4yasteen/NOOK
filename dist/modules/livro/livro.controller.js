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
const livro_service_1 = require("./livro.service");
const livro_view_helpers_1 = require("./livro.view.helpers");
const create_livro_dto_1 = require("./dtos/create-livro.dto");
const nest_validation_view_1 = require("nest-validation-view");
let LivroController = class LivroController {
    constructor(livroService) {
        this.livroService = livroService;
    }
    async getAll() {
        let livros = await this.livroService.findAll();
        return { listaLivros: livros, _h: livro_view_helpers_1.helpers };
    }
    async formularioNovo() {
        return {};
    }
    async formularioNovoSalvar(dados) {
        await this.livroService.create(dados);
    }
    async formularioAtualizacao(id) {
        const livro = await this.livroService.findOne(id);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }
        return { livro, _h: livro_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.livroService.update(id, dados);
    }
    async formularioExclusao(id) {
        const livro = await this.livroService.findOne(id);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }
        return { livro, _h: livro_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.livroService.remove(id);
    }
};
exports.LivroController = LivroController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('livro/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('livro/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/livros'),
    (0, nest_validation_view_1.ValidationView)('livro/formulario', ({ request, errors }) => {
        return {
            livro: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_livro_dto_1.CreateLivroDto]),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('livro/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/livros'),
    (0, nest_validation_view_1.ValidationView)('livro/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            livro: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_livro_dto_1.CreateLivroDto]),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('livro/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/livros'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LivroController.prototype, "formularioExclusaoConfirmar", null);
exports.LivroController = LivroController = __decorate([
    (0, common_1.Controller)('livros'),
    __metadata("design:paramtypes", [livro_service_1.LivroService])
], LivroController);
//# sourceMappingURL=livro.controller.js.map