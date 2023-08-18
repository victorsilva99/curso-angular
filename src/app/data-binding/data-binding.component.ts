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

  constructor() {

  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }


  ngOnInit(): void {
  }

}
