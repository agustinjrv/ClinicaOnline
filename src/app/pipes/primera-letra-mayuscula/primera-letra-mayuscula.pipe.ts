import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraLetraMayuscula'
})
export class PrimeraLetraMayusculaPipe implements PipeTransform {

  transform(value:string): string {

      let retorno = value.substr(0,1).toUpperCase();
      retorno += value.substr(1);
      return retorno;
  }

}
