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
const reserva_service_1 = require("./reserva.service");
const reserva_view_helpers_1 = require("./reserva.view.helpers");
const create_reserva_dto_1 = require("./dtos/create-reserva.dto");
const nest_validation_view_1 = require("nest-validation-view");
const livro_entity_1 = require("../livro/livro.entity");
let ReservaController = class ReservaController {
    constructor(reservaService) {
        this.reservaService = reservaService;
    }
    async getAll() {
        let reservas = await this.reservaService.findAll();
        return { listaReservas: reservas, _h: reserva_view_helpers_1.helpers };
    }
    async formularioNovo() {
        const listaLivros = await livro_entity_1.Livro.find();
        return { listaLivros };
    }
    async formularioNovoSalvar(req, dados) {
        await this.reservaService.create({ ...dados, clienteId: req.nookUser.clientId, status: 'pendente', dataReserva: new Date() });
    }
    async formularioAtualizacao(id) {
        const reserva = await this.reservaService.findOne(id);
        if (!reserva) {
            throw new Error('Reserva não encontrada');
        }
        return { reserva, _h: reserva_view_helpers_1.helpers };
    }
    async formularioAtualizacaoSalvar(id, dados) {
        await this.reservaService.update(id, dados);
    }
    async formularioExclusao(id) {
        const reserva = await this.reservaService.findOne(id);
        if (!reserva) {
            throw new Error('Reserva não encontrada');
        }
        return { reserva, _h: reserva_view_helpers_1.helpers };
    }
    async formularioExclusaoConfirmar(id) {
        await this.reservaService.remove(id);
    }
};
exports.ReservaController = ReservaController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('reserva/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('reserva/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioNovo", null);
__decorate([
    (0, common_1.Post)('novo'),
    (0, common_1.Redirect)('/painel'),
    (0, nest_validation_view_1.ValidationView)('reserva/formulario', ({ request, errors }) => {
        return {
            reserva: request.body,
            errors
        };
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioNovoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/atualizacao'),
    (0, common_1.Render)('reserva/formulario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioAtualizacao", null);
__decorate([
    (0, common_1.Post)(':id/atualizacao'),
    (0, common_1.Redirect)('/painel'),
    (0, nest_validation_view_1.ValidationView)('reserva/formulario', ({ request, errors }) => {
        const { params, body } = request;
        return {
            reserva: { id: params.id, ...body },
            errors
        };
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioAtualizacaoSalvar", null);
__decorate([
    (0, common_1.Get)(':id/exclusao'),
    (0, common_1.Render)('reserva/exclusao'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioExclusao", null);
__decorate([
    (0, common_1.Post)(':id/exclusao'),
    (0, common_1.Redirect)('/painel'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "formularioExclusaoConfirmar", null);
exports.ReservaController = ReservaController = __decorate([
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reserva_service_1.ReservaService])
], ReservaController);
//# sourceMappingURL=reserva.controller.js.map