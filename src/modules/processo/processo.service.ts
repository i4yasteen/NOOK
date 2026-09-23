import { Injectable } from '@nestjs/common';
import { processos } from '../../demo-store';
@Injectable()
export class ProcessoService { async findAll(){ return processos; } }
