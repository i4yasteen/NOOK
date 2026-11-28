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
exports.FuncionarioController = void 0;
const common_1 = require("@nestjs/common");
const funcionario_service_1 = require("./funcionario.service");
const funcionario_view_helpers_1 = require("./funcionario.view.helpers");
const create_funcionario_dto_1 = require("./dtos/create-funcionario.dto");
const nest_validation_view_1 = require("nest-validation-view");
let FuncionarioController = class FuncionarioController {
    constructor(funcionarioService) {
        this.funcionarioService = funcionarioService;
    }
    async getAll() {
        let funcionarios = await this.funcionarioService.findAll();
        return { listaFuncionarios: funcionarios, _h: funcionario_view_helpers_1.helpers };
    }
    async formularioNovo() {
        return {};
    }
    async formularioNovoSalvar(dados) {
        await this.funcionarioService.create(dados);
    }
    async formularioAtualizacao(id) {
        const funcionario = await this.funcionarioService.findOne(id);
        if (!funcionario) {
            throw new Error('Funcionário não encontrado');
        }
        return { funcionario, _h: funcionario_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.funcionarioService.update(id, dados);
    }
    async formularioExclusao(id) {
        const funcionario = await this.funcionarioService.findOne(id);
        if (!funcionario) {
            throw new Error('Funcionário não encontrado');
        }
        return { funcionario, _h: funcionario_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.funcionarioService.remove(id);
    }
};
exports.FuncionarioController = FuncionarioController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('funcionario/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('funcionario/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/funcionarios'),
    (0, nest_validation_view_1.ValidationView)('funcionario/formulario', ({ request, errors }) => {
        return {
            funcionario: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_funcionario_dto_1.CreateFuncionarioDto]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('funcionario/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/funcionarios'),
    (0, nest_validation_view_1.ValidationView)('funcionario/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            funcionario: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_funcionario_dto_1.CreateFuncionarioDto]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('funcionario/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/funcionarios'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "formularioExclusaoConfirmar", null);
exports.FuncionarioController = FuncionarioController = __decorate([
    (0, common_1.Controller)('funcionarios'),
    __metadata("design:paramtypes", [funcionario_service_1.FuncionarioService])
], FuncionarioController);
//# sourceMappingURL=funcionario.controller.js.map