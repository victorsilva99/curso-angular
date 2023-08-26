import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  getCursos(): string[] {
    return ['Java', 'Ext JS', 'Angular', 'React'];
  }
}
