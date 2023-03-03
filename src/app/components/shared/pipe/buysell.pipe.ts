import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeBuySell'
})
export class BuySellPipe implements PipeTransform {

  transform(value: number) {
    if (value == 1)
      return 'C'
    else if (value == 2)
      return 'V'
    else
      (erro: any) => {
        console.log("Tipo de ordem inválido, erro: ", erro);
      }
      return '0'
  }
}


/*
import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: "currencySpace" })
export class CurrencySpacePipe extends CurrencyPipe  {
  transform(value: number, ...args: any[]): string {
    return super.transform(value, ...args).replace(/([^\d.,])(\d)/, "$1 $2");
  }
} */
