"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    rotuloStatus: (status) => {
        let color = 'secondary';
        switch (status) {
            case 'pendente':
                color = 'warning';
                break;
            case 'concluida':
                color = 'success';
                break;
            case 'cancelada':
                color = 'danger';
                break;
        }
        return `<span class="badge text-bg-${color}">${status}</span>`;
    }
};
//# sourceMappingURL=reserva.view.helpers.js.map