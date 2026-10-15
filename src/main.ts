import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module';
import expressEjsLayouts from 'express-ejs-layouts';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use(expressEjsLayouts);
  app.set('layout', 'layouts/main');
  const port = process.env.PORT ?? 3000;
  await app.listen(port, () => console.log(`Nook rodando em http://localhost:${port}`));
}
bootstrap();
