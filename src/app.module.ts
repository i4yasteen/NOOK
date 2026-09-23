import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { ProcessoModule } from './modules/processo/processo.module';
import { LivroModule } from './modules/livro/livro.module';
import { EventoModule } from './modules/evento/evento.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { FuncionarioModule } from './modules/funcionario/funcionario.module';
import { ParticipacaoModule } from './modules/participacao/participacao.module';
import { ReservaModule } from './modules/reserva/reserva.module';

@Module({
 imports:[ConfigModule.forRoot({isGlobal:true}),ProcessoModule,LivroModule,EventoModule,ClienteModule,FuncionarioModule,ParticipacaoModule,ReservaModule],
 controllers:[AppController],
 providers:[AppService,{provide:APP_GUARD,useClass:AuthGuard}],
})
export class AppModule {}
