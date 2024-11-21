import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FirestoreService } from '../../services/firestore.service';
import { NgIf } from '@angular/common';
import { TimestampPipe } from '../../pipes/timestamp.pipe';
import { DialogoComentarioComponent } from '../dialogo-comentario/dialogo-comentario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EstadoTurnoDirective } from '../../directives/estado-turno.directive';
import { PrimerLetraMayusPipe } from '../../pipes/primer-letra-mayus.pipe';


export interface TurnoData {
  id: string;
  comentario: string;
  paciente: string;
  especialista: string;
  especialidad: string;
  fecha: Date;
  hora: string;
  estado: string;
}

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    NgIf,
    TimestampPipe,
    MatButtonModule,
    EstadoTurnoDirective,
    PrimerLetraMayusPipe
  ],
  templateUrl: './turnos.component.html',
  styleUrl: './turnos.component.css'
})
export class TurnosComponent {
  displayedColumns: string[] = ['paciente', 'especialista', 'especialidad', 'fecha', 'hora', 'estado', 'acciones'];
  dataSource!: MatTableDataSource<TurnoData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  turnoSeleccionado: any = null;

  constructor(private firestoreService: FirestoreService, private dialog: MatDialog) { }

  ngOnInit() {
    this.firestoreService.getTurnos()
      .then((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cancelarTurno(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Cancelar turno',
        mensaje: 'Por favor, indique el motivo de la cancelacion del turno.',
        requiereComentario: true, 
      },
    });

    dialogRef.afterClosed().subscribe(comentario => {
      if (comentario) {
        row.estado = 'cancelado';
        row.comentario = comentario;

        this.firestoreService.updateDocument(`turnos/${row.id}`, {estado: 'cancelado', comentario: comentario});
      }
    });
  }


  verComentario(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Reseña de la consulta',
        mensaje: row.comentario,
        requiereComentario: false,
        requiereEncuesta: false
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }
}
