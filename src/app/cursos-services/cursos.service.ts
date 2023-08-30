import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  onAddCurso(curso: string) {
    this.cursos.push(curso);
  }
}
