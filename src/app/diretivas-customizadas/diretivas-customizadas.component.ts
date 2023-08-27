import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css'],
})
export class DiretivasCustomizadasComponent {
  mostrarCursos = true;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
