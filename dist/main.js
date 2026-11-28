"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const node_path_1 = require("node:path");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const helpers_1 = require("./helpers");
const nest_validation_view_1 = require("nest-validation-view");
const auth_1 = require("./auth/auth");
const database_source_1 = require("./config/constants/database-source");
const seed_demo_1 = require("./seed-demo");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await (0, seed_demo_1.seedDemoData)(app.get(database_source_1.DATABASE_SOURCE));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        exceptionFactory: (errors) => new common_1.BadRequestException((0, nest_validation_view_1.buildValidationErrorPayload)(errors)),
    }));
    app.useStaticAssets((0, node_path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, node_path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    app.use(express_ejs_layouts_1.default);
    app.set('layout', 'layouts/main');
    app.use((req, res, next) => {
        const cookies = String(req.headers.cookie || '').split(';').map((item) => item.trim());
        const sessionCookie = cookies.find((item) => item.startsWith('nook_session='));
        const user = (0, auth_1.readSession)(sessionCookie?.slice('nook_session='.length));
        res.locals.nookUser = user;
        req.nookUser = user;
        const path = req.path || '/';
        const publicPath = path === '/login' || path.startsWith('/css/') || path.startsWith('/js/') || path.startsWith('/images/') || path === '/favicon.ico';
        if (publicPath)
            return next();
        if (path === '/logout')
            return user ? next() : res.redirect('/login');
        if (!user)
            return res.redirect('/login');
        if (path === '/' || path === '/painel')
            return next();
        const isBookOrEvent = path === '/livros' || path.startsWith('/livros/') || path === '/eventos' || path.startsWith('/eventos/');
        const isClientAction = (path === '/reservas/novo' || path === '/participar/novo');
        if (user.role === 'funcionario' && isBookOrEvent)
            return next();
        if (user.role === 'cliente' && (req.method === 'GET' && (path === '/livros' || path === '/eventos' || isClientAction) || req.method === 'POST' && isClientAction))
            return next();
        return res.status(403).send('Acesso não permitido para este perfil. <a href="/painel">Voltar ao painel</a>');
    });
    (0, helpers_1.registerHelpers)(app.getHttpAdapter().getInstance());
    const port = process.env.PORT ?? 3000;
    await app.listen(port, () => common_1.Logger.log(`Application running in http://localhost:${port}`, 'NestExpressApplication'));
}
bootstrap();
//# sourceMappingURL=main.js.map