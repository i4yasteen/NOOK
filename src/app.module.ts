import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { LivroModule } from './modules/livro/livro.module';
import { EventoModule } from './modules/evento/evento.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { FuncionarioModule } from './modules/funcionario/funcionario.module';
import { ReservaModule } from './modules/reserva/reserva.module';
import { ParticiparModule } from './modules/participar/participar.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    LivroModule,
    EventoModule,
    ClienteModule,
    FuncionarioModule,
    ReservaModule,
    ParticiparModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
