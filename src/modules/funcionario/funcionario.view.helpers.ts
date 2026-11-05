export const helpers = {
    rotuloFuncao: (funcao: string) => {
        let color = 'secondary';

        switch(funcao.toLowerCase()) {
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
