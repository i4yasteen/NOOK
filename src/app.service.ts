import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo à Nook Cafeteria e Sebo!';
  }

  getDadosIniciais(): object {
    return {
      titulo: 'Nook Cafeteria e Sebo',
      descricao: 'Espaço cultural com livros, café e eventos literários.',
      horaAgora: new Date().toLocaleString('pt-BR'),
    };
  }
}
