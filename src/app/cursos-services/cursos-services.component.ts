import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos-services',
  templateUrl: './cursos-services.component.html',
  styleUrls: ['./cursos-services.component.css'],
})
export class CursosServicesComponent implements OnInit {
  cursos: string[] = [];
  cursosService: CursosService;

  constructor(cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}
