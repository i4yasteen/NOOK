import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getHello(): object {
    const pessoas = [
      { nome: 'Taynara Melo', email: 'taynara.melo@nook.com' },
      { nome: 'Yasmin Kauany', email: 'yasminkauany0707@gmail.com' },
    ];

    return {
      titulo: 'Nook Cafeteria e Sebo',
      horaAgora: new Date().toLocaleString('pt-BR'),
      listaPessoas: pessoas,
    };
  }

  @Get('sobre')
  @Render('sobre')
  getSobre(): object {
    return {
      titulo: 'Sobre a Nook Cafeteria e Sebo',
    };
  }

  @Get('login')
  @Render('autenticacao/login')
  login(): object {
    return { layout: false };
  }
}
