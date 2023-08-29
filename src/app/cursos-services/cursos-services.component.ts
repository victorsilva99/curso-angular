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

  constructor() {
    this.cursosService = new CursosService();
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}
