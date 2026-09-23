import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { reservas, clientes, livros, nextId } from '../../demo-store';
@Controller('reservas')
export class ReservaController {
 @Get() @Render('reservas/index') index(){const cn=new Map(clientes.map(x=>[x.id,x.nome])),ln=new Map(livros.map(x=>[x.id,x.titulo]));return {titulo:'Reservas de livros',reservas:reservas.map(r=>({...r,clienteNome:cn.get(r.clienteId)||'—',livroTitulo:ln.get(r.livroId)||'—'})),clientes,livros};}
 @Post() @Redirect('/reservas') criar(@Body() b:any){const livro=livros.find(l=>l.id===Number(b.livroId));if(!livro||livro.estoque<1)return;reservas.push({id:nextId.reserva(),clienteId:Number(b.clienteId),livroId:Number(b.livroId),dataReserva:new Date(),status:'pendente'});}
 @Post(':id/status') @Redirect('/reservas') status(@Param('id') id:string,@Body() b:any){const r=reservas.find(x=>x.id===Number(id));if(r)r.status=b.status;}
}
