"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./config/database/database.module");
const livro_module_1 = require("./modules/livro/livro.module");
const evento_module_1 = require("./modules/evento/evento.module");
const cliente_module_1 = require("./modules/cliente/cliente.module");
const funcionario_module_1 = require("./modules/funcionario/funcionario.module");
const reserva_module_1 = require("./modules/reserva/reserva.module");
const participar_module_1 = require("./modules/participar/participar.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            livro_module_1.LivroModule,
            evento_module_1.EventoModule,
            cliente_module_1.ClienteModule,
            funcionario_module_1.FuncionarioModule,
            reserva_module_1.ReservaModule,
            participar_module_1.ParticiparModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map