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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
    (0, helpers_1.registerHelpers)(app.getHttpAdapter().getInstance());
    const port = process.env.PORT ?? 3000;
    await app.listen(port, () => common_1.Logger.log(`Application running in http://localhost:${port}`, 'NestExpressApplication'));
}
bootstrap();
//# sourceMappingURL=main.js.map