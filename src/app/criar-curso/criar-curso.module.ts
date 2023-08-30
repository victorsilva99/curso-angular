import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos-services/cursos.service';

@NgModule({
  declarations: [CriarCursoComponent],
  imports: [CommonModule],
  exports: [CriarCursoComponent],
  providers: [CursosService],
})
export class CriarCursoModule {}
