import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-dialogo-comentario',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    FormsModule,
    MatButton,
    NgIf,
    MatSliderModule
  ],
  templateUrl: './dialogo-comentario.component.html',
  styleUrl: './dialogo-comentario.component.css'
})
export class DialogoComentarioComponent {
  comentario: string = '';
  puntuacion: number = 5;

  constructor(
    private dialogRef: MatDialogRef<DialogoComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; mensaje: string; requiereComentario: boolean; requiereEncuesta: boolean }
  ) {
    if (data.requiereEncuesta) {
      // this.comentario = '';
      
    }
  }

  onConfirm(): void {
    this.dialogRef.close({ comentario: this.comentario, puntuacion: this.puntuacion });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
  
  formatLabel(value: number): string {
    this.puntuacion = value;
    return `${value}`;
  }
}
