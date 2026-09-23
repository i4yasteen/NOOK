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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const demo_store_1 = require("./demo-store");
let AppController = class AppController {
    home() { return { titulo: 'Nook Cafeteria e Sebo', livros: demo_store_1.livros.slice(0, 6), eventos: demo_store_1.eventos.slice(0, 3) }; }
    login() { return { titulo: 'Login', layout: false }; }
    loginPost(body, res) {
        const email = process.env.ADMIN_EMAIL || 'admin@nook.local';
        const password = process.env.ADMIN_PASSWORD || '12345';
        if (body.email === email && body.senha === password) {
            res.setHeader('Set-Cookie', 'nook_session=admin; HttpOnly; SameSite=Lax; Path=/');
            return res.redirect('/painel');
        }
        return res.status(401).render('autenticacao/login', { titulo: 'Login', layout: false, erro: 'Usuário ou senha inválidos' });
    }
    logout(res) { res.setHeader('Set-Cookie', 'nook_session=; Max-Age=0; HttpOnly; SameSite=Lax; Path=/'); return res.redirect('/login'); }
    painel() { return { titulo: 'Painel', livros: demo_store_1.livros.length, eventos: demo_store_1.eventos.length, clientes: demo_store_1.clientes.length, funcionarios: demo_store_1.funcionarios.length, reservas: demo_store_1.reservas.filter(r => r.status === 'pendente').length, participacoes: demo_store_1.participacoes.length }; }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('inicial'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "home", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('autenticacao/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "loginPost", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('painel'),
    (0, common_1.Render)('painel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "painel", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map