export type NookRole = 'cliente' | 'funcionario';
export interface NookUser {
    email: string;
    role: NookRole;
    exp: number;
    clientId?: number;
}
export declare function createSession(email: string, role: NookRole): string;
export declare function readSession(token?: string): NookUser | null;
