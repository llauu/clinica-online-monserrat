import { Pipe, PipeTransform } from '@angular/core';

interface SeguridadPass {
  mensaje: string;
  color: string;
}

@Pipe({
  name: 'seguridadPass',
  standalone: true
})
export class SeguridadPassPipe implements PipeTransform {

  transform(password: string): SeguridadPass {
    if (!password) return { mensaje: '', color: '#gray' };
    
    let puntaje = 0;
    
    // Verificar longitud
    if (password.length >= 8) puntaje += 20;
    if (password.length >= 12) puntaje += 10;
    
    // Verificar numeros
    if (/\d/.test(password)) puntaje += 20;
    
    // Verificar letras minusculas
    if (/[a-z]/.test(password)) puntaje += 20;
    
    // Verificar letras mayusculas
    if (/[A-Z]/.test(password)) puntaje += 20;
    
    // Verificar caracteres especiales
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) puntaje += 10;

    // Retornar nivel de seguridad y color basado en el puntaje
    if (puntaje >= 90) return { mensaje: 'Muy Segura', color: '#28a745' };
    if (puntaje >= 70) return { mensaje: 'Segura', color: '#198754' };
    if (puntaje >= 50) return { mensaje: 'Media', color: '#ffc107' };
    if (puntaje >= 30) return { mensaje: 'Debil', color: '#fd7e14' };
    return { mensaje: 'Muy Debil', color: '#dc3545' };
  }
}
