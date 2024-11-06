import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHorarios]',
  standalone: true
})
export class HorariosDirective {
  @Input() appHorarios: string = ''; 

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor() { }

  ngOnInit() {
    this.updateBackgroundColor();
  }

  ngOnChanges() {
    this.updateBackgroundColor();
  }

  private updateBackgroundColor() {
    const horario = parseInt(this.appHorarios);

    if(horario > 0) {
      this.backgroundColor = '#7bc4f8';
    }
    else {
      this.backgroundColor = '#f87c87';
    }
  }
}
