"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
exports.helpers = {
    rotuloEstoque: (quantidade) => {
        let color = 'secondary';
        let texto = 'Sem estoque';
        if (quantidade > 5) {
            color = 'success';
            texto = 'Disponível';
        }
        else if (quantidade > 0) {
            color = 'warning';
            texto = 'Poucas unidades';
        }
        else {
            color = 'danger';
            texto = 'Esgotado';
        }
        return `<span class="badge text-bg-${color}">${texto}</span>`;
    }
};
//# sourceMappingURL=livro.view.helpers.js.map