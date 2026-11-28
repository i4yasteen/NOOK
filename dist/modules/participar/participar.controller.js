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
exports.ParticiparController = void 0;
const common_1 = require("@nestjs/common");
const participar_service_1 = require("./participar.service");
const participar_view_helpers_1 = require("./participar.view.helpers");
const create_participar_dto_1 = require("./dtos/create-participar.dto");
const nest_validation_view_1 = require("nest-validation-view");
const evento_entity_1 = require("../evento/evento.entity");
let ParticiparController = class ParticiparController {
    constructor(participarService) {
        this.participarService = participarService;
    }
    async getAll() {
        let participacoes = await this.participarService.findAll();
        return { listaParticipacoes: participacoes, _h: participar_view_helpers_1.helpers };
    }
    async formularioNovo() {
        const listaEventos = await evento_entity_1.Evento.find();
        return { listaEventos };
    }
    async formularioNovoSalvar(req, dados) {
        await this.participarService.create({ ...dados, clienteId: req.nookUser.clientId, dataRegistro: new Date() });
    }
    async formularioAtualizacao(id) {
        const participar = await this.participarService.findOne(id);
        if (!participar) {
            throw new Error('Participação não encontrada');
        }
        return { participar, _h: participar_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.participarService.update(id, dados);
    }
    async formularioExclusao(id) {
        const participar = await this.participarService.findOne(id);
        if (!participar) {
            throw new Error('Participação não encontrada');
        }
        return { participar, _h: participar_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.participarService.remove(id);
    }
};
exports.ParticiparController = ParticiparController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('participar/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('participar/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/painel'),
    (0, nest_validation_view_1.ValidationView)('participar/formulario', ({ request, errors }) => {
        return {
            participar: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_participar_dto_1.CreateParticiparDto]),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('participar/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/painel'),
    (0, nest_validation_view_1.ValidationView)('participar/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            participar: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_participar_dto_1.CreateParticiparDto]),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('participar/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/painel'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParticiparController.prototype, "formularioExclusaoConfirmar", null);
exports.ParticiparController = ParticiparController = __decorate([
    (0, common_1.Controller)('participar'),
    __metadata("design:paramtypes", [participar_service_1.ParticiparService])
], ParticiparController);
//# sourceMappingURL=participar.controller.js.map