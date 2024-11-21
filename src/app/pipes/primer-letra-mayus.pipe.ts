import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primerLetraMayus',
  standalone: true
})
export class PrimerLetraMayusPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
