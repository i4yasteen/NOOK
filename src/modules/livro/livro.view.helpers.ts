export const helpers = {
    rotuloEstoque: (quantidade: number) => { 
        let color = 'secondary';
        let texto = 'Sem estoque';

        if (quantidade > 5) {
            color = 'success';
            texto = 'Disponível';
        } else if (quantidade > 0) {
            color = 'warning';
            texto = 'Poucas unidades';
        } else {
            color = 'danger';
            texto = 'Esgotado';
        }

        return `<span class="badge text-bg-${color}">${texto}</span>`;
    }
};
