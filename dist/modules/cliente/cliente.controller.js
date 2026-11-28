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
const cliente_service_1 = require("./cliente.service");
const cliente_view_helpers_1 = require("./cliente.view.helpers");
const create_cliente_dto_1 = require("./dtos/create-cliente.dto");
const nest_validation_view_1 = require("nest-validation-view");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async getAll() {
        let clientes = await this.clienteService.findAll();
        return { listaClientes: clientes, _h: cliente_view_helpers_1.helpers };
    }
    async formularioNovo() {
        return {};
    }
    async formularioNovoSalvar(dados) {
        await this.clienteService.create(dados);
    }
    async formularioAtualizacao(id) {
        const cliente = await this.clienteService.findOne(id);
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }
        return { cliente, _h: cliente_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.clienteService.update(id, dados);
    }
    async formularioExclusao(id) {
        const cliente = await this.clienteService.findOne(id);
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }
        return { cliente, _h: cliente_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.clienteService.remove(id);
    }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('cliente/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('cliente/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/clientes'),
    (0, nest_validation_view_1.ValidationView)('cliente/formulario', ({ request, errors }) => {
        return {
            cliente: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('cliente/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/clientes'),
    (0, nest_validation_view_1.ValidationView)('cliente/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            cliente: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('cliente/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/clientes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "formularioExclusaoConfirmar", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map