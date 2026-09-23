import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { clientes, nextId } from '../../demo-store';
@Controller('clientes')
export class ClienteController {
 @Get() @Render('clientes/index') index(){return {titulo:'Clientes',clientes:[...clientes].sort((a,b)=>a.nome.localeCompare(b.nome))};}
 @Get('novo') @Render('clientes/form') novo(){return {titulo:'Cadastrar Cliente',cliente:null};}
 @Post() @Redirect('/clientes') criar(@Body() b:any){clientes.push({id:nextId.cliente(),nome:b.nome,cpf:b.cpf,email:b.email,telefone:b.telefone,endereco:b.endereco});}
 @Get(':id/editar') @Render('clientes/form') editar(@Param('id') id:string){return {titulo:'Editar Cliente',cliente:clientes.find(c=>c.id===Number(id))||null};}
 @Post(':id') @Redirect('/clientes') atualizar(@Param('id') id:string,@Body() b:any){const c=clientes.find(x=>x.id===Number(id));if(c)Object.assign(c,{nome:b.nome,cpf:b.cpf,email:b.email,telefone:b.telefone,endereco:b.endereco});}
 @Post(':id/excluir') @Redirect('/clientes') excluir(@Param('id') id:string){const i=clientes.findIndex(x=>x.id===Number(id));if(i>=0)clientes.splice(i,1);}
}
