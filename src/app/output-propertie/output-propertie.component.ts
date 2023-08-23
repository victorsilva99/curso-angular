import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: false }) campoValorInput!: ElementRef;

  constructor() { }

  incrementa() {
    //console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
