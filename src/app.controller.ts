import { Body, Controller, Get, Post, Param, Query, Res, Render, Redirect } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly db: AppService) {}
  @Get() @Render('inicial') home() { return {titulo:'Início', livros:this.db.books.slice(0,3), eventos:this.db.events.slice(0,3)}; }
  @Get('livros') @Render('livros') books(@Query('q') q='') { const s=q.toLowerCase(); return {titulo:'Livros', livros:this.db.books.filter(b=>(b.titulo+' '+b.autor).toLowerCase().includes(s)), q}; }
  @Get('eventos') @Render('eventos') events() { return {titulo:'Eventos', eventos:this.db.events}; }
  @Get('login') @Render('login') login(@Query('erro') erro='') { return {titulo:'Entrar',erro,layout:false}; }
  @Post('login') loginPost(@Body() body:any,@Res() res:Response) { if(body.email==='admin@nook.com' && body.senha==='nook123') return res.redirect('/admin'); return res.redirect('/login?erro=1'); }
  @Get('logout') @Redirect('/') logout() {}
  @Get('admin') @Render('admin') admin() { return {titulo:'Painel administrativo',books:this.db.books,events:this.db.events,clients:this.db.clients,employees:this.db.employees}; }
  @Get('admin/novo/:tipo') @Render('cadastro') form(@Param('tipo') tipo:string) { return {titulo:'Novo cadastro',tipo, item:{},campos:this.fields(tipo)}; }
  @Post('admin/salvar/:tipo') save(@Param('tipo') tipo:string,@Body() body:any,@Res() res:Response) { const allowed=['books','events','clients','employees']; if(!allowed.includes(tipo)) return res.redirect('/admin'); const data={...body}; delete data.id; if(tipo==='books'){data.ano=Number(data.ano)||new Date().getFullYear();data.estoque=Number(data.estoque)||0;} if(tipo==='events'){data.vagas=Number(data.vagas)||0;} if(body.id) this.db.update(tipo,Number(body.id),data); else this.db.add(tipo,data); return res.redirect('/admin'); }
  @Get('admin/editar/:tipo/:id') @Render('cadastro') edit(@Param('tipo') tipo:string,@Param('id') id:string) { const item=this.db.all(tipo).find(x=>x.id===Number(id)); return {titulo:'Editar cadastro',tipo,item:item||{},campos:this.fields(tipo)}; }
  @Post('admin/excluir/:tipo/:id') delete(@Param('tipo') tipo:string,@Param('id') id:string,@Res() res:Response) { if(['books','events','clients','employees'].includes(tipo)) this.db.remove(tipo,Number(id)); return res.redirect('/admin'); }
  @Post('reservar/:id') reserve(@Param('id') id:string,@Body() body:any,@Res() res:Response) { const book=this.db.books.find(b=>b.id===Number(id)); if(book && book.estoque>0){this.db.reservations.push({livro:book.titulo,nome:body.nome||'Cliente',email:body.email||'',status:'Pendente',data:new Date().toLocaleDateString('pt-BR')});book.estoque--;} return res.redirect('/livros?reservado=1'); }
  @Post('participar/:id') participate(@Param('id') id:string,@Body() body:any,@Res() res:Response) { const event=this.db.events.find(e=>e.id===Number(id)); if(event && event.vagas>0 && !this.db.participations.some(p=>p.eventoId===event.id && p.email===body.email)){this.db.participations.push({eventoId:event.id,nome:body.nome||'Cliente',email:body.email||''});event.vagas--;} return res.redirect('/eventos'); }
  private fields(tipo:string) { const f:any={books:[['titulo','Título','text',true],['autor','Autor','text',true],['ano','Ano','number',true],['estoque','Quantidade em estoque','number',true],['capa','URL da capa (opcional)','url',false]],events:[['titulo','Título','text',true],['descricao','Descrição','textarea',true],['data','Data','date',true],['horario','Horário','time',true],['local','Local','text',true],['vagas','Vagas disponíveis','number',true],['imagem','URL do banner (opcional)','url',false]],clients:[['nome','Nome','text',true],['cpf','CPF','text',true],['email','E-mail','email',true],['telefone','Telefone','tel',true],['endereco','Endereço','text',false]],employees:[['nome','Nome','text',true],['cpf','CPF','text',true],['email','E-mail','email',true],['telefone','Telefone','tel',true],['funcao','Função','text',true]]}; return f[tipo]||f.books; }
}
