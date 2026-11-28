"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    rotuloFuncao: (funcao) => {
        let color = 'secondary';
        switch (funcao.toLowerCase()) {
            case 'admin':
            case 'administrador':
                color = 'danger';
                break;
            case 'atendente':
                color = 'primary';
                break;
            case 'gerente':
                color = 'success';
                break;
            default:
                color = 'info';
        }
        return `<span class="badge text-bg-${color}">${funcao}</span>`;
    }
};
//# sourceMappingURL=funcionario.view.helpers.js.map