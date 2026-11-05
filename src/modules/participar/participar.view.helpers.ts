export const helpers = {
    rotuloParticipacao: (data: Date) => {
        return `<span class="badge text-bg-success">Registrado em ${new Date(data).toLocaleDateString('pt-BR')}</span>`;
    }
};
