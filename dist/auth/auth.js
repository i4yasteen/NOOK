"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.readSession = readSession;
const node_crypto_1 = require("node:crypto");
const secret = () => process.env.NOOK_SESSION_SECRET || 'troque-esta-chave-no-arquivo-env-nook';
function createSession(email, role) {
    const payload = { email, role, exp: Date.now() + 8 * 60 * 60 * 1000, ...(role === 'cliente' ? { clientId: Number(process.env.NOOK_CLIENTE_ID || 1) } : {}) };
    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = (0, node_crypto_1.createHmac)('sha256', secret()).update(encoded).digest('base64url');
    return `${encoded}.${signature}`;
}
function readSession(token) {
    if (!token)
        return null;
    const [encoded, signature] = token.split('.');
    if (!encoded || !signature)
        return null;
    const expected = (0, node_crypto_1.createHmac)('sha256', secret()).update(encoded).digest();
    let received;
    try {
        received = Buffer.from(signature, 'base64url');
    }
    catch {
        return null;
    }
    if (received.length !== expected.length || !(0, node_crypto_1.timingSafeEqual)(received, expected))
        return null;
    try {
        const user = JSON.parse(Buffer.from(encoded, 'base64url').toString());
        if (!user.email || !['cliente', 'funcionario'].includes(user.role) || user.exp < Date.now())
            return null;
        return user;
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=auth.js.map