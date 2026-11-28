import { createHmac, timingSafeEqual } from 'node:crypto';

export type NookRole = 'cliente' | 'funcionario';
export interface NookUser { email: string; role: NookRole; exp: number; clientId?: number }

const secret = () => process.env.NOOK_SESSION_SECRET || 'troque-esta-chave-no-arquivo-env-nook';

export function createSession(email: string, role: NookRole): string {
  const payload: NookUser = { email, role, exp: Date.now() + 8 * 60 * 60 * 1000, ...(role === 'cliente' ? { clientId: Number(process.env.NOOK_CLIENTE_ID || 1) } : {}) };
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', secret()).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}

export function readSession(token?: string): NookUser | null {
  if (!token) return null;
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return null;
  const expected = createHmac('sha256', secret()).update(encoded).digest();
  let received: Buffer;
  try { received = Buffer.from(signature, 'base64url'); } catch { return null; }
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return null;
  try {
    const user = JSON.parse(Buffer.from(encoded, 'base64url').toString()) as NookUser;
    if (!user.email || !['cliente', 'funcionario'].includes(user.role) || user.exp < Date.now()) return null;
    return user;
  } catch { return null; }
}
