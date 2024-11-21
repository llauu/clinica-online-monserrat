import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSoloNumeros]',
  standalone: true
})
export class SoloNumerosDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const initialValue = this.el.nativeElement.value;
    const newValue = initialValue.replace(/[^0-9]*/g, '');
    this.el.nativeElement.value = newValue;
    if (initialValue !== newValue) {
      event.stopPropagation();
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}