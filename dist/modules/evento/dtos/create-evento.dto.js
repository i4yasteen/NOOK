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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEventoDto {
}
exports.CreateEventoDto = CreateEventoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo título é obrigatório' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo descrição é obrigatório' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo data é obrigatório' }),
    __metadata("design:type", Date)
], CreateEventoDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo horário é obrigatório' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "horario", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo local é obrigatório' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "local", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'As vagas devem ser um número inteiro' }),
    (0, class_validator_1.Min)(0, { message: 'As vagas não podem ser negativas' }),
    __metadata("design:type", Number)
], CreateEventoDto.prototype, "vagas", void 0);
//# sourceMappingURL=create-evento.dto.js.map