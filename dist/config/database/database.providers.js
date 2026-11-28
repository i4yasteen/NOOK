"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const database_source_1 = require("../constants/database-source");
const toBoolean = (value, fallback) => {
    if (value === undefined)
        return fallback;
    return ['true', '1', 'yes', 'on'].includes(value.toLowerCase());
};
exports.databaseProviders = [
    {
        provide: database_source_1.DATABASE_SOURCE,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: configService.get('DB_HOST', 'localhost'),
                port: Number(configService.get('DB_PORT', '3306')),
                username: configService.get('DB_USERNAME', 'root'),
                password: configService.get('DB_PASSWORD', ''),
                database: configService.get('DB_NAME', 'pw2_app_web'),
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                synchronize: toBoolean(configService.get('DB_SYNCHRONIZE', 'false'), false),
                logging: toBoolean(configService.get('DB_LOGGING', 'false'), false),
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map