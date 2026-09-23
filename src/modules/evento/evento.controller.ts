import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { eventos, nextId } from '../../demo-store';
@Controller('eventos')
export class EventoController {
 @Get() @Render('eventos/index') index(){return {titulo:'Eventos',eventos:[...eventos].sort((a,b)=>a.data.getTime()-b.data.getTime())};}
 @Get('novo') @Render('eventos/form') novo(){return {titulo:'Cadastrar Evento',evento:null};}
 @Post() @Redirect('/eventos') criar(@Body() b:any){eventos.push({id:nextId.evento(),titulo:b.titulo,descricao:b.descricao,data:new Date(`${b.data}T00:00:00`),horario:b.horario,local:b.local,vagas:Number(b.vagas||30),imagem:b.imagem||null});}
 @Get(':id/editar') @Render('eventos/form') editar(@Param('id') id:string){return {titulo:'Editar Evento',evento:eventos.find(e=>e.id===Number(id))||null};}
 @Post(':id') @Redirect('/eventos') atualizar(@Param('id') id:string,@Body() b:any){const e=eventos.find(x=>x.id===Number(id));if(e)Object.assign(e,{titulo:b.titulo,descricao:b.descricao,data:new Date(`${b.data}T00:00:00`),horario:b.horario,local:b.local,vagas:Number(b.vagas||30),imagem:b.imagem||null});}
 @Post(':id/excluir') @Redirect('/eventos') excluir(@Param('id') id:string){const i=eventos.findIndex(x=>x.id===Number(id));if(i>=0)eventos.splice(i,1);}
}
