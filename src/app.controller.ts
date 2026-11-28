import { Controller, Get, Post, Req, Res, Render, Redirect } from '@nestjs/common';
import { Request, Response } from 'express';
import { createSession } from './auth/auth';

@Controller()
export class AppController {
  @Get()
  @Redirect('/painel')
  inicio(): object { return {}; }

  @Get('login')
  @Render('autenticacao/login')
  login(): object { return { layout: false }; }

  @Post('login')
  entrar(@Req() req: Request, @Res() res: Response): void {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const senha = String(req.body?.senha || '');
    const funcionarioEmail = (process.env.NOOK_FUNCIONARIO_EMAIL || 'funcionario@nook.com').toLowerCase();
    const funcionarioSenha = process.env.NOOK_FUNCIONARIO_SENHA || 'funcionario123';
    const clienteEmail = (process.env.NOOK_CLIENTE_EMAIL || 'cliente@nook.com').toLowerCase();
    const clienteSenha = process.env.NOOK_CLIENTE_SENHA || 'cliente123';

    let role: 'cliente' | 'funcionario' | null = null;
    if (email === funcionarioEmail && senha === funcionarioSenha) role = 'funcionario';
    if (email === clienteEmail && senha === clienteSenha) role = 'cliente';

    if (!role) {
      res.status(401).render('autenticacao/login', {
        layout: false,
        erro: 'E-mail ou senha inválidos. Confira suas credenciais e tente novamente.',
        email,
      });
      return;
    }

    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    res.setHeader('Set-Cookie', `nook_session=${createSession(email, role)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=28800${secure}`);
    res.redirect('/painel');
  }

  @Get('logout')
  sair(@Res() res: Response): void {
    res.setHeader('Set-Cookie', 'nook_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0');
    res.redirect('/login');
  }

  @Get('painel')
  @Render('painel')
  painel(@Req() req: Request): object {
    return { usuario: (req as Request & { nookUser?: { email: string; role: string } }).nookUser };
  }
}
