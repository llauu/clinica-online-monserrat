import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialogo-historia-clinica',
  standalone: true,
  templateUrl: './dialogo-historia-clinica.component.html',
  styleUrls: ['./dialogo-historia-clinica.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DialogoHistoriaClinicaComponent {
  altura: number | null = null;
  peso: number | null = null;
  temperatura: number | null = null;
  presion: string = '';
  datosDinamicos: { clave: string, valor: string }[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogoHistoriaClinicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      titulo: string; 
      mensaje: string; 
      historiaClinica?: {
        altura: number;
        peso: number;
        temperatura: number;
        presion: string;
        datosDinamicos: { clave: string, valor: string }[];
      };
      editable: boolean;
    }
  ) {}

  ngOnInit(): void {
    if (this.data.historiaClinica) {
      this.altura = this.data.historiaClinica.altura;
      this.peso = this.data.historiaClinica.peso;
      this.temperatura = this.data.historiaClinica.temperatura;
      this.presion = this.data.historiaClinica.presion;
      this.datosDinamicos = this.data.historiaClinica.datosDinamicos || [];
    }
  }

  validarCampos() {
    return this.altura && this.peso && this.temperatura && this.presion;
  }

  agregarDatoDinamico(): void {
    if (this.datosDinamicos.length < 3) {
      this.datosDinamicos.push({ clave: '', valor: '' });
    }
  }

  eliminarDatoDinamico(index: number): void {
    if (this.datosDinamicos.length > 0) {
      this.datosDinamicos.splice(index, 1);
    }
  }

  onConfirmar(): void {
    const historiaClinica = {
      altura: this.altura,
      peso: this.peso,
      temperatura: this.temperatura,
      presion: this.presion,
      datosDinamicos: this.datosDinamicos
    };
    this.dialogRef.close(historiaClinica);
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
}
