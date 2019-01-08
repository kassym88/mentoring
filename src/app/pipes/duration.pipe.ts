import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const h: number = Math.trunc(value / 60);
    const m: number = Math.round(value % 60);
    if (h === 0) {
      return `${m}min`;
    } else {
      return `${h}h ${m}min`;
    }
  }

}
