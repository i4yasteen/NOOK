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
const auth_1 = require("./auth/auth");
let AppController = class AppController {
    inicio() { return {}; }
    login() { return { layout: false }; }
    entrar(req, res) {
        const email = String(req.body?.email || '').trim().toLowerCase();
        const senha = String(req.body?.senha || '');
        const funcionarioEmail = (process.env.NOOK_FUNCIONARIO_EMAIL || 'funcionario@nook.com').toLowerCase();
        const funcionarioSenha = process.env.NOOK_FUNCIONARIO_SENHA || 'funcionario123';
        const clienteEmail = (process.env.NOOK_CLIENTE_EMAIL || 'cliente@nook.com').toLowerCase();
        const clienteSenha = process.env.NOOK_CLIENTE_SENHA || 'cliente123';
        let role = null;
        if (email === funcionarioEmail && senha === funcionarioSenha)
            role = 'funcionario';
        if (email === clienteEmail && senha === clienteSenha)
            role = 'cliente';
        if (!role) {
            res.status(401).render('autenticacao/login', {
                layout: false,
                erro: 'E-mail ou senha inválidos. Confira suas credenciais e tente novamente.',
                email,
            });
            return;
        }
        const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
        res.setHeader('Set-Cookie', `nook_session=${(0, auth_1.createSession)(email, role)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=28800${secure}`);
        res.redirect('/painel');
    }
    sair(res) {
        res.setHeader('Set-Cookie', 'nook_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0');
        res.redirect('/login');
    }
    painel(req) {
        return { usuario: req.nookUser };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Redirect)('/painel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "inicio", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('autenticacao/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "entrar", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sair", null);
__decorate([
    (0, common_1.Get)('painel'),
    (0, common_1.Render)('painel'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "painel", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map