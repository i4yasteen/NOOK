import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { join } from 'node:path';
import { Livro } from '../modules/livro/livro.entity';
import { Evento } from '../modules/evento/evento.entity';
const ds=new DataSource({type:'mysql',host:process.env.DB_HOST||'localhost',port:Number(process.env.DB_PORT||3306),username:process.env.DB_USERNAME||'root',password:process.env.DB_PASSWORD||'',database:process.env.DB_NAME||'nook_cafeteria',entities:[join(__dirname,'../**/*.entity{.ts,.js}')],synchronize:true});
async function seed(){await ds.initialize(); if(await Livro.count()===0){await Livro.save([{titulo:'O Pequeno Príncipe',autor:'Antoine de Saint-Exupéry',ano:1943,estoque:3},{titulo:'Dom Casmurro',autor:'Machado de Assis',ano:1899,estoque:2}]);} if(await Evento.count()===0){await Evento.save([{titulo:'Clube de Leitura Nook',descricao:'Encontro para conversar sobre literatura.',data:new Date('2026-10-10'),horario:'15:00',local:'Nook Cafeteria e Sebo',vagas:30}]);} await ds.destroy();}
seed().catch(e=>{console.error(e);process.exit(1)});
