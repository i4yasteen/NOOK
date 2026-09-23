import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import type { Response } from 'express';
import { livros, eventos, clientes, funcionarios, reservas, participacoes } from './demo-store';

@Controller()
export class AppController {
  @Get() @Render('inicial')
  home() { return { titulo:'Nook Cafeteria e Sebo', livros: livros.slice(0,6), eventos: eventos.slice(0,3) }; }

  @Get('login') @Render('autenticacao/login') login(){return {titulo:'Login', layout:false};}

  @Post('login')
  loginPost(@Body() body:any, @Res() res:Response) {
    const email = process.env.ADMIN_EMAIL || 'admin@nook.local';
    const password = process.env.ADMIN_PASSWORD || '12345';
    if(body.email === email && body.senha === password) {
      res.setHeader('Set-Cookie','nook_session=admin; HttpOnly; SameSite=Lax; Path=/');
      return res.redirect('/painel');
    }
    return res.status(401).render('autenticacao/login',{titulo:'Login',layout:false,erro:'Usuário ou senha inválidos'});
  }

  @Post('logout') logout(@Res() res:Response){res.setHeader('Set-Cookie','nook_session=; Max-Age=0; HttpOnly; SameSite=Lax; Path=/');return res.redirect('/login');}

  @Get('painel') @Render('painel')
  painel(){return {titulo:'Painel',livros:livros.length,eventos:eventos.length,clientes:clientes.length,funcionarios:funcionarios.length,reservas:reservas.filter(r=>r.status==='pendente').length,participacoes:participacoes.length};}
}
