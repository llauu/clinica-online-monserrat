import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appEstadoTurno]',
  standalone: true
})
export class EstadoTurnoDirective {
  @Input() appEstadoTurno: string = ''; 

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor() { }

  ngOnInit() {
    this.updateBackgroundColor();
  }

  ngOnChanges() {
    this.updateBackgroundColor();
  }

  private updateBackgroundColor() {

    switch(this.appEstadoTurno) {
      case 'pendiente':
        this.backgroundColor = '#d7d7d7';
        break;

      case 'rechazado':
        this.backgroundColor = '#ff6b6b';
        break;

      case 'aceptado':
        this.backgroundColor = '#4caf50';
        break;

      case 'cancelado':
        this.backgroundColor = '#f7a440';
        break;

      case 'finalizado':
        this.backgroundColor = '#64b5f6';
        break;
      
      default:
        this.backgroundColor = '#d7d7d7';
        break;
    } 
  }
}
