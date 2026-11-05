export const helpers = {
    rotuloStatus: (status: string) => { 
        let color = 'secondary';

        switch(status) {
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
