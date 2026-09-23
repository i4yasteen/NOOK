import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import type { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();
    const path = req.path;
    if (path === '/login' || path === '/' || path.startsWith('/css/') || path.startsWith('/js/') ||
        (req.method === 'GET' && (path === '/livros' || path === '/eventos'))) return true;
    const cookies = req.headers.cookie || '';
    const ok = cookies.split(';').some(c => c.trim() === 'nook_session=admin');
    if (ok) return true;
    res.redirect('/login');
    return false;
  }
}
