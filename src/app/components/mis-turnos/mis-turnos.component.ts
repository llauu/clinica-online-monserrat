import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FirestoreService } from '../../services/firestore.service';
import { NgIf } from '@angular/common';
import { TimestampPipe } from '../../pipes/timestamp.pipe';
import { UserService } from '../../services/user.service';
import { EstadoTurnoDirective } from '../../directives/estado-turno.directive';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComentarioComponent } from '../dialogo-comentario/dialogo-comentario.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogoHistoriaClinicaComponent } from '../dialogo-historia-clinica/dialogo-historia-clinica.component';


export interface TurnoData {
  id: string;
  comentario: string;
  comentarioPaciente: string;
  calificacion: number;
  historiaClinica: any;
  paciente: string;
  especialista: string;
  especialidad: string;
  fecha: Date;
  hora: string;
  estado: string;
}

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatButtonModule,
    NgIf,
    TimestampPipe,
    EstadoTurnoDirective,
    FormsModule
  ],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})
export class MisTurnosComponent {
  displayedColumns: string[] = ['paciente', 'especialista', 'especialidad', 'fecha', 'hora', 'estado', 'acciones'];
  dataSource!: MatTableDataSource<TurnoData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  idUser: string = '';
  rolUser: string = '';

  turnoSeleccionado: any = null;

  constructor(private firestoreService: FirestoreService, private userService: UserService, private dialog: MatDialog) { 
    this.idUser = this.userService.getId();
    this.rolUser = this.userService.getRol();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TurnoData>();

    if(this.rolUser === 'especialista') {
      this.firestoreService.getTurnosPorEspecialista(this.idUser).then((data: any) => {
        const turnos = data.map((doc: any) => ({
          id: doc.id,
          comentario: doc.comentario,
          comentarioPaciente: doc.comentarioPaciente,
          calificacion: doc.calificacion,
          historiaClinica: doc.historiaClinica,
          paciente: doc.paciente,
          especialista: doc.especialista,
          especialidad: doc.especialidad,
          fecha: doc.fecha,
          hora: doc.hora,
          estado: doc.estado
        } as TurnoData));

        this.dataSource.data = turnos;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
        // Configuración de filtro personalizado
        this.dataSource.filterPredicate = (data: TurnoData, filter: string) => {
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.includes(filter.trim().toLowerCase());
        };
      });
    } else {
      this.firestoreService.getTurnosPorPaciente(this.idUser).then((data: any) => {
        const turnos = data.map((doc: any) => ({
          id: doc.id,
          comentario: doc.comentario,
          comentarioPaciente: doc.comentarioPaciente,
          calificacion: doc.calificacion,
          historiaClinica: doc.historiaClinica,
          paciente: doc.paciente,
          especialista: doc.especialista,
          especialidad: doc.especialidad,
          fecha: doc.fecha,
          hora: doc.hora,
          estado: doc.estado
        } as TurnoData));

        this.dataSource.data = turnos;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Configuración de filtro personalizado
        this.dataSource.filterPredicate = (data: TurnoData, filter: string) => {
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.includes(filter.trim().toLowerCase());
        };
      });
    }
  }


  verHistoriaClinica(row: any) {
    const dialogRef = this.dialog.open(DialogoHistoriaClinicaComponent, {
      data: {
        titulo: 'Historia Clinica',
        mensaje: 'Detalles de la historia clinica del paciente.',
        historiaClinica: row.historiaClinica,
        editable: false
      },
    });

    dialogRef.afterClosed().subscribe(historiaClinica => {
      if (historiaClinica) {
        // this.firestoreService.updateDocument(`turnos/${row.id}`, { historiaClinica });
      }
    });
  }

  cargarHistoriaClinica(row: any) {
    const dialogRef = this.dialog.open(DialogoHistoriaClinicaComponent, {
      data: {
        titulo: 'Historia Clinica',
        mensaje: 'Por favor, ingrese los detalles de la historia clinica del paciente.',
        editable: true
      },
    });

    dialogRef.afterClosed().subscribe(historiaClinica => {
      if (historiaClinica) {
        row.historiaClinica = historiaClinica;
        this.firestoreService.updateDocument(`turnos/${row.id}`, { historiaClinica });
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
  
  calificarAtencion(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Calificar atencion',
        mensaje: 'Por favor, deje un comentario de como fue la atencion del especialista.',
        requiereComentario: true, 
        requiereEncuesta: true
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const { comentario, puntuacion } = data;
        row.comentarioPaciente = comentario;
        row.calificacion = puntuacion;

        this.firestoreService.updateDocument(`turnos/${row.id}`, {comentarioPaciente: comentario, calificacion: puntuacion});
      }
    });
  }

  aceptarTurno(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Aceptar turno',
        mensaje: '¿Esta seguro de que desea aceptar este turno?',
        requiereComentario: false,
        requiereEncuesta: false
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        row.estado = 'aceptado';
        
        this.firestoreService.updateDocument(`turnos/${row.id}`, {estado: 'aceptado'});
      }
    });
  }

  cancelarTurno(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Cancelar turno',
        mensaje: 'Por favor, indique el motivo de la cancelacion del turno.',
        requiereComentario: true, 
        requiereEncuesta: false
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        row.estado = 'cancelado';
        row.comentario = data.comentario;

        this.firestoreService.updateDocument(`turnos/${row.id}`, {estado: 'cancelado', comentario: data.comentario});
      }
    });
  }

  rechazarTurno(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Rechazar turno',
        mensaje: 'Por favor, indique el motivo del rechazo del turno.',
        requiereComentario: true,
        requiereEncuesta: false
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log(row);
        row.estado = 'rechazado';
        row.comentario = data.comentario;

        this.firestoreService.updateDocument(`turnos/${row.id}`, {estado: 'rechazado', comentario: data.comentario});
      }
    });
  }

  finalizarTurno(row: any) {
    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Finalizar turno',
        mensaje: 'Por favor, ingrese la reseña y diagnostico de la consulta.',
        requiereComentario: true,
        requiereEncuesta: false
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        row.estado = 'finalizado';
        row.comentario = data.comentario;
        
        this.firestoreService.updateDocument(`turnos/${row.id}`, {estado: 'finalizado', comentario: data.comentario});
      }
    });
  }
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
