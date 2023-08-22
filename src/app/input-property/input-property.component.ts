import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('a') nomeDoCurso: string = '';
  @Input('b') nomeDoOutroCurso: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
