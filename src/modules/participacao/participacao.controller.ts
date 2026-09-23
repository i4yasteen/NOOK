import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { clientes, eventos, participacoes, nextId } from '../../demo-store';
@Controller('participacoes')
export class ParticipacaoController {
 @Get() @Render('participacoes/index') index(){const cn=new Map(clientes.map(x=>[x.id,x.nome])),en=new Map(eventos.map(x=>[x.id,x.titulo]));return {titulo:'Participações em eventos',participacoes:participacoes.map(p=>({...p,clienteNome:cn.get(p.clienteId)||'—',eventoTitulo:en.get(p.eventoId)||'—'})),clientes,eventos};}
 @Post() @Redirect('/participacoes') criar(@Body() b:any){const clienteId=Number(b.clienteId),eventoId=Number(b.eventoId);if(!participacoes.some(p=>p.clienteId===clienteId&&p.eventoId===eventoId))participacoes.push({id:nextId.participacao(),clienteId,eventoId,dataRegistro:new Date()});}
}
