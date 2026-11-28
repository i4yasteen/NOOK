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
exports.CreateParticiparDto = void 0;
const class_validator_1 = require("class-validator");
class CreateParticiparDto {
}
exports.CreateParticiparDto = CreateParticiparDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo cliente é obrigatório' }),
    (0, class_validator_1.IsInt)({ message: 'O cliente deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateParticiparDto.prototype, "clienteId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo evento é obrigatório' }),
    (0, class_validator_1.IsInt)({ message: 'O evento deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateParticiparDto.prototype, "eventoId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo data de registro é obrigatório' }),
    __metadata("design:type", Date)
], CreateParticiparDto.prototype, "dataRegistro", void 0);
//# sourceMappingURL=create-participar.dto.js.map