import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-comentario',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    FormsModule,
    MatButton,
    NgIf
  ],
  templateUrl: './dialogo-comentario.component.html',
  styleUrl: './dialogo-comentario.component.css'
})
export class DialogoComentarioComponent {
  comentario: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogoComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; mensaje: string; requiereComentario: boolean }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(this.comentario || true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
