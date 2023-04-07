import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'byte',
})
export class BytePipe implements PipeTransform {
  transform(value: any) {
    if (value < 1000) {
      return `${Math.round(value)} Byte`;
    } else {
      let temp = value / 1000;
      if (temp < 1000) {
        return `${Math.round(temp)} KB`;
      } else {
        return `${Math.round(temp / 1000)} MB`;
      }
    }
  }
}
