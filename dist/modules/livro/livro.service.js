"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroService = void 0;
const common_1 = require("@nestjs/common");
const livro_entity_1 = require("./livro.entity");
let LivroService = class LivroService {
    async findAll() {
        let livros = await livro_entity_1.Livro.find();
        return livros;
    }
    async findOne(_id) {
        return livro_entity_1.Livro.findOne({
            where: { id: _id }
        });
    }
    async create(dados) {
        const livro = livro_entity_1.Livro.create({ ...dados });
        return livro.save();
    }
    async update(id, dados) {
        const livro = await this.findOne(id);
        if (!livro)
            return null;
        Object.assign(livro, { ...dados });
        return livro.save();
    }
    async remove(id) {
        const livro = await this.findOne(id);
        if (livro) {
            await livro.remove();
        }
    }
};
exports.LivroService = LivroService;
exports.LivroService = LivroService = __decorate([
    (0, common_1.Injectable)()
], LivroService);
//# sourceMappingURL=livro.service.js.map