import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat',
  pure: false
})
export class DecimalFormatPipe implements PipeTransform {

  transform(value: number|string, format: string = null): any {
    switch (format) {
      case null:
        value = this.clean(value);
        return this.formater(this.cloner(value));
        break;
    }
    return value;
  }

  formater (value) {
    let result: string;
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
  }
  cloner (value) {
    return JSON.parse(JSON.stringify(value));
  }
  clean(value) {
    return `${value}`.replace(/\s/g, '');
  }

}
