import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import expressEjsLayouts from 'express-ejs-layouts';
import { registerHelpers } from './helpers';
import { buildValidationErrorPayload } from 'nest-validation-view';
import { readSession } from './auth/auth';
import { DataSource } from 'typeorm';
import { DATABASE_SOURCE } from './config/constants/database-source';
import { seedDemoData } from './seed-demo';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Popula livros e evento de demonstração sem duplicar registros.
  await seedDemoData(app.get<DataSource>(DATABASE_SOURCE));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) =>
        new BadRequestException(buildValidationErrorPayload(errors)),
    }),
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.use(expressEjsLayouts);
  app.set('layout', 'layouts/main');

  // Autenticação simples por cookie assinado e controle de acesso por perfil.
  app.use((req: any, res: any, next: any) => {
    const cookies = String(req.headers.cookie || '').split(';').map((item: string) => item.trim());
    const sessionCookie = cookies.find((item: string) => item.startsWith('nook_session='));
    const user = readSession(sessionCookie?.slice('nook_session='.length));
    res.locals.nookUser = user;
    req.nookUser = user;

    const path = req.path || '/';
    const publicPath = path === '/login' || path.startsWith('/css/') || path.startsWith('/js/') || path.startsWith('/images/') || path === '/favicon.ico';
    if (publicPath) return next();
    if (path === '/logout') return user ? next() : res.redirect('/login');
    if (!user) return res.redirect('/login');
    if (path === '/' || path === '/painel') return next();

    const isBookOrEvent = path === '/livros' || path.startsWith('/livros/') || path === '/eventos' || path.startsWith('/eventos/');
    const isClientAction = (path === '/reservas/novo' || path === '/participar/novo');
    if (user.role === 'funcionario' && isBookOrEvent) return next();
    if (user.role === 'cliente' && (req.method === 'GET' && (path === '/livros' || path === '/eventos' || isClientAction) || req.method === 'POST' && isClientAction)) return next();
    return res.status(403).send('Acesso não permitido para este perfil. <a href="/painel">Voltar ao painel</a>');
  });

  registerHelpers(app.getHttpAdapter().getInstance());

  const port = process.env.PORT ?? 3000;

  await app.listen(port, () =>
    Logger.log(
      `Application running in http://localhost:${port}`,
      'NestExpressApplication',
    ),
  );
}
bootstrap();
