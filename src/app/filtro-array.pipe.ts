import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'cypress/types/bluebird';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if ( value.length === 0 || args === undefined ) {
     return value;
    }

    const filter = args.toLocaleString().toLowerCase();
    return value.filter(
      (v: string) => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }


}
