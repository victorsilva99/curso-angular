import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeSite: string;

  constructor() {
    this.nomeSite = 'http://www.google.com';
  }

  ngOnInit(): void {

  }

}
