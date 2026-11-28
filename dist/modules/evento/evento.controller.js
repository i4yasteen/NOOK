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
const evento_service_1 = require("./evento.service");
const evento_view_helpers_1 = require("./evento.view.helpers");
const create_evento_dto_1 = require("./dtos/create-evento.dto");
const nest_validation_view_1 = require("nest-validation-view");
let EventoController = class EventoController {
    constructor(eventoService) {
        this.eventoService = eventoService;
    }
    async getAll() {
        let eventos = await this.eventoService.findAll();
        return { listaEventos: eventos, _h: evento_view_helpers_1.helpers };
    }
    async formularioNovo() {
        return {};
    }
    async formularioNovoSalvar(dados) {
        await this.eventoService.create(dados);
    }
    async formularioAtualizacao(id) {
        const evento = await this.eventoService.findOne(id);
        if (!evento) {
            throw new Error('Evento não encontrado');
        }
        return { evento, _h: evento_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.eventoService.update(id, dados);
    }
    async formularioExclusao(id) {
        const evento = await this.eventoService.findOne(id);
        if (!evento) {
            throw new Error('Evento não encontrado');
        }
        return { evento, _h: evento_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.eventoService.remove(id);
    }
};
exports.EventoController = EventoController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('evento/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('evento/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/eventos'),
    (0, nest_validation_view_1.ValidationView)('evento/formulario', ({ request, errors }) => {
        return {
            evento: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('evento/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/eventos'),
    (0, nest_validation_view_1.ValidationView)('evento/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            evento: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_evento_dto_1.CreateEventoDto]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('evento/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/eventos'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "formularioExclusaoConfirmar", null);
exports.EventoController = EventoController = __decorate([
    (0, common_1.Controller)('eventos'),
    __metadata("design:paramtypes", [evento_service_1.EventoService])
], EventoController);
//# sourceMappingURL=evento.controller.js.map