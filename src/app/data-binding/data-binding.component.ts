import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.google.com';
  cursoAngular: boolean = true;
  urlDaImagem: string = 'https://picsum.photos/id/237/200/300';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  constructor() {

  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): void {
    alert('Botão clicado');
  }

  salvarValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent): void {
    console.log(evento);
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {
  }

}
