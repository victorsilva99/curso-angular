import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
