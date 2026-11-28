"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    rotuloVagas: (vagas) => {
        let color = 'secondary';
        let texto = 'Sem vagas';
        if (vagas > 10) {
            color = 'success';
            texto = 'Vagas disponíveis';
        }
        else if (vagas > 0) {
            color = 'warning';
            texto = 'Poucas vagas';
        }
        else {
            color = 'danger';
            texto = 'Esgotado';
        }
        return `<span class="badge text-bg-${color}">${texto}</span>`;
    }
};
//# sourceMappingURL=evento.view.helpers.js.map