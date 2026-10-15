import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private nextId = 20;
  books: any[] = [
    {id:1,titulo:'A Biblioteca da Meia-Noite',autor:'Matt Haig',ano:2021,estoque:4,capa:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500'},
    {id:2,titulo:'O Pequeno Príncipe',autor:'Antoine de Saint-Exupéry',ano:1943,estoque:3,capa:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500'},
    {id:3,titulo:'Tudo é Rio',autor:'Carla Madeira',ano:2014,estoque:2,capa:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500'},
    {id:4,titulo:'Café com Deus Pai',autor:'Junior Rostirola',ano:2023,estoque:0,capa:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500'}
  ];
  events: any[] = [
    {id:5,titulo:'Clube de Leitura: clássicos',descricao:'Uma conversa leve sobre livros que atravessam gerações.',data:'2026-11-05',horario:'18:30',local:'Nook Cafeteria e Sebo',vagas:20,imagem:''},
    {id:6,titulo:'Feira de Troca de Livros',descricao:'Traga um livro em bom estado e encontre sua próxima leitura.',data:'2026-11-14',horario:'15:00',local:'Nook Cafeteria e Sebo',vagas:30,imagem:''},
    {id:7,titulo:'Poesia & Café',descricao:'Uma tarde para ler, ouvir e compartilhar poesia.',data:'2026-11-21',horario:'16:00',local:'Nook Cafeteria e Sebo',vagas:15,imagem:''}
  ];
  clients: any[] = [];
  employees: any[] = [];
  reservations: any[] = [];
  participations: any[] = [];
  all(resource:string) { return (this as any)[resource] || []; }
  add(resource:string, data:any) { const list=this.all(resource); const item={id:this.nextId++,...data}; list.push(item); return item; }
  update(resource:string,id:number,data:any) { const item=this.all(resource).find(x=>x.id===Number(id)); if(item) Object.assign(item,data); return item; }
  remove(resource:string,id:number) { const list=this.all(resource); const i=list.findIndex(x=>x.id===Number(id)); if(i>=0) list.splice(i,1); }
}
