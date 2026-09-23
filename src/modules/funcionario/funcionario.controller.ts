import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { funcionarios, nextId } from '../../demo-store';
@Controller('funcionarios')
export class FuncionarioController {
 @Get() @Render('funcionarios/index') index(){return {titulo:'Funcionários',funcionarios:[...funcionarios].sort((a,b)=>a.nome.localeCompare(b.nome))};}
 @Get('novo') @Render('funcionarios/form') novo(){return {titulo:'Cadastrar Funcionário',funcionario:null};}
 @Post() @Redirect('/funcionarios') criar(@Body() b:any){funcionarios.push({id:nextId.funcionario(),nome:b.nome,cpf:b.cpf,email:b.email,telefone:b.telefone,funcao:b.funcao});}
 @Get(':id/editar') @Render('funcionarios/form') editar(@Param('id') id:string){return {titulo:'Editar Funcionário',funcionario:funcionarios.find(f=>f.id===Number(id))||null};}
 @Post(':id') @Redirect('/funcionarios') atualizar(@Param('id') id:string,@Body() b:any){const f=funcionarios.find(x=>x.id===Number(id));if(f)Object.assign(f,{nome:b.nome,cpf:b.cpf,email:b.email,telefone:b.telefone,funcao:b.funcao});}
 @Post(':id/excluir') @Redirect('/funcionarios') excluir(@Param('id') id:string){const i=funcionarios.findIndex(x=>x.id===Number(id));if(i>=0)funcionarios.splice(i,1);}
}
