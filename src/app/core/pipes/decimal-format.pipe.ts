import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat'
})
export class DecimalFormatPipe implements PipeTransform {

  transform(value: number|string, format: string = null): any {
    let result: string;
    switch (format) {
      case null:
        if (typeof +value === 'number' && +value > 0) {
          // todo: formater
        } else {
          // todo: return value
        }
        value = `${value}`;
        let i = -3;
        let j = 0;
        let end = false;
        let cp = 0;
        result = '';
        while (!end) {
          if (j < value.length) {
            i += 3;
            j += 3;
            result = ' ' + value.substring(value.length - j, value.length - i) + result;
          } else {
            i += 3;
            result = ' ' + value.substring(0, value.length - i) + result;
            end = true;

          }
          cp++;
        }
        return result;
        break;
    }
    return result;
  }

}
