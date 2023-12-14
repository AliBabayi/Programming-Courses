import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'ShortDate'
})
export class ShortDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'MMM y');
  }
}
