import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../log.service';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  onAddCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
