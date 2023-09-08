import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  filtro = '';

  livros: string[] = ['Java', 'Angular 2'];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });

  addCurso(curso: string){
    this.livros.push(curso);
  }

  obterCursos(){
    if ( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '' ) {
      return this.livros;
     }

     return this.livros.filter(
      (v: string) => {
        if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
  });
  }
}
