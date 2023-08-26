import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url = 'http://www.google.com';
  cursoAngular = true;
  urlDaImagem = 'https://picsum.photos/id/237/200/300';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nome = '';

  pessoa: any = {
    nome: 'def',
    idade: 2,
    end: {
      rua: 'def',
      numero: 0,
    },
  };

  nomeDoCurso = 'Angular';
  nomeDoOutroCurso = 'C#';

  valorInicial = 10;

  onMudouValor(evento: Event) {
    console.log(evento);
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
}
