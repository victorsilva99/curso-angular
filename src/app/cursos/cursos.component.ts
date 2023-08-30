import { Component } from '@angular/core';
import { CursosService } from '../cursos-services/cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  //providers: [CursosService],
})
export class CursosComponent {
  nomeSite: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomeSite = 'http://www.google.com';
    this.cursos = this.cursosService.getCursos();
  }
}
