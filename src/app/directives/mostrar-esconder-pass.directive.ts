import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostrarEsconderPass]',
  standalone: true
})
export class MostrarEsconderPassDirective {
  private shown = false;

  constructor(private el: ElementRef) {
    this.setupToggleButton();
  }

  private setupToggleButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-outline-dark position-absolute end-0 top-50 mt-3 me-2 translate-middle-y';
    button.style.zIndex = '5';
    button.innerHTML = '<i class="bi bi-eye"></i>';
    
    this.el.nativeElement.parentElement.style.position = 'relative';
    this.el.nativeElement.parentElement.appendChild(button);

    button.addEventListener('click', () => {
      this.shown = !this.shown;
      this.el.nativeElement.type = this.shown ? 'text' : 'password';
      button.innerHTML = this.shown ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
    });
  }
}
