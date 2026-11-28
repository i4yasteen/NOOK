"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDemoData = seedDemoData;
const livro_entity_1 = require("./modules/livro/livro.entity");
const evento_entity_1 = require("./modules/evento/evento.entity");
const cliente_entity_1 = require("./modules/cliente/cliente.entity");
async function seedDemoData(dataSource) {
    const clienteRepo = dataSource.getRepository(cliente_entity_1.Cliente);
    const livroRepo = dataSource.getRepository(livro_entity_1.Livro);
    const eventoRepo = dataSource.getRepository(evento_entity_1.Evento);
    let cliente = await clienteRepo.findOne({ where: { email: process.env.NOOK_CLIENTE_EMAIL || 'cliente@nook.com' } });
    if (!cliente) {
        cliente = await clienteRepo.findOne({ where: { cpf: '00000000000' } });
    }
    if (!cliente) {
        cliente = clienteRepo.create({
            nome: 'Cliente de demonstração',
            cpf: '00000000000',
            email: process.env.NOOK_CLIENTE_EMAIL || 'cliente@nook.com',
            telefone: '(00) 00000-0000',
            endereco: 'Cadastro de demonstração - NOOK',
        });
        cliente = await clienteRepo.save(cliente);
    }
    process.env.NOOK_CLIENTE_ID = String(cliente.id);
    const livros = [
        {
            titulo: 'O Pequeno Príncipe',
            autor: 'Antoine de Saint-Exupéry',
            ano: 1943,
            quantidade: 4,
            capa: 'https://livrarialoyola.fbitsstatic.net/img/p/o-pequeno-principe-181778/376434.jpg?h=800&qs=ignore&v=no-change&w=800',
        },
        {
            titulo: 'Dom Casmurro',
            autor: 'Machado de Assis',
            ano: 1899,
            quantidade: 3,
            capa: 'https://images.tcdn.com.br/img/img_prod/1043052/dom_casmurro_12019_1_c24baa33081e8405255ef17ea4c377c1.jpg',
        },
    ];
    for (const dados of livros) {
        let livro = await livroRepo.findOne({ where: { titulo: dados.titulo } });
        if (!livro) {
            livro = livroRepo.create(dados);
            await livroRepo.save(livro);
        }
        else if (!livro.capa) {
            livro.capa = dados.capa;
            await livroRepo.save(livro);
        }
    }
    const tituloEvento = 'Clube de Leitura: uma tarde entre páginas';
    const evento = await eventoRepo.findOne({ where: { titulo: tituloEvento } });
    if (!evento) {
        await eventoRepo.save(eventoRepo.create({
            titulo: tituloEvento,
            descricao: 'Uma tarde acolhedora para conversar sobre livros, compartilhar indicações e conhecer outros leitores. Traga seu livro favorito e venha tomar um café com a gente!',
            data: '2026-12-12',
            horario: '15:00',
            local: 'Nook Cafeteria e Sebo - Rua Treze de Setembro, 529, Ji-Paraná - RO',
            vagas: 20,
            banner: '',
        }));
    }
}
//# sourceMappingURL=seed-demo.js.map