import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { livros, nextId } from '../../demo-store';
@Controller('livros')
export class LivroController {
 @Get() @Render('livros/index') index(){return {titulo:'Livros',livros:[...livros].sort((a,b)=>b.id-a.id)};}
 @Get('novo') @Render('livros/form') novo(){return {titulo:'Cadastrar Livro',livro:null};}
 @Post() @Redirect('/livros') criar(@Body() b:any){livros.push({id:nextId.livro(),titulo:b.titulo,autor:b.autor,ano:Number(b.ano),estoque:Number(b.estoque),imagem:b.imagem||null});}
 @Get(':id/editar') @Render('livros/form') editar(@Param('id') id:string){return {titulo:'Editar Livro',livro:livros.find(l=>l.id===Number(id))||null};}
 @Post(':id') @Redirect('/livros') atualizar(@Param('id') id:string,@Body() b:any){const l=livros.find(x=>x.id===Number(id));if(l)Object.assign(l,{titulo:b.titulo,autor:b.autor,ano:Number(b.ano),estoque:Number(b.estoque),imagem:b.imagem||null});}
 @Post(':id/excluir') @Redirect('/livros') excluir(@Param('id') id:string){const i=livros.findIndex(x=>x.id===Number(id));if(i>=0)livros.splice(i,1);}
}
