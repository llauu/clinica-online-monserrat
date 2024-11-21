import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FirestoreService } from '../../services/firestore.service';
import { UserService } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TimestampPipe } from '../../pipes/timestamp.pipe';
import { Timestamp } from '@angular/fire/firestore';
import { DialogoComentarioComponent } from '../dialogo-comentario/dialogo-comentario.component';
import { DialogoHistoriaClinicaComponent } from '../dialogo-historia-clinica/dialogo-historia-clinica.component';
import { EstadoTurnoDirective } from '../../directives/estado-turno.directive';
import { MatDialog } from '@angular/material/dialog';
import { PrimerLetraMayusPipe } from '../../pipes/primer-letra-mayus.pipe';

export interface UsuarioData {
  id: string;
  nombre: string;
  apellido: string;
  edad: string;
  dni: string;
  email: string;
  imagenUno?: string;
}

export interface TurnoData {
  fecha: Timestamp;
  hora: string;
  comentario: string;
  especialidad: string;
  especialista: string;
  estado: string;
  historiaClinica: any;
}

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    NgIf,
    NgFor,
    MatIcon,
    TimestampPipe,
    DialogoComentarioComponent,
    DialogoHistoriaClinicaComponent,
    EstadoTurnoDirective,
    PrimerLetraMayusPipe
  ],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  dataSource!: MatTableDataSource<UsuarioData>;
  pacienteSeleccionado: UsuarioData | null = null;
  turnosPaciente: TurnoData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private firestoreService: FirestoreService, private userService: UserService, private dialog: MatDialog) { }

  async ngOnInit() {
    const idEspecialista = this.userService.getId();
    const pacientes = await this.firestoreService.obtenerPacientesAtendidosPorEspecialista(idEspecialista);
    
    this.dataSource = new MatTableDataSource(pacientes);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async onSelectPaciente(paciente: UsuarioData) {
    this.pacienteSeleccionado = paciente;

    const idEspecialista = this.userService.getId();

    this.turnosPaciente = await this.firestoreService.obtenerTurnosPorPacienteYEspecialista(paciente.id, idEspecialista);
  }

  verHistoriaClinica(row: any) {
    const dialogRef = this.dialog.open(DialogoHistoriaClinicaComponent, {
      data: {
        titulo: 'Historia Clinica',
        mensaje: 'Por favor, ingrese los detalles de la historia clinica del paciente.',
        historiaClinica: row.historiaClinica
      },
    });

    dialogRef.afterClosed().subscribe(historiaClinica => {
      if (historiaClinica) {
        this.firestoreService.updateDocument(`turnos/${row.id}`, { historiaClinica });
      }
    });
  }

  verComentario(row: any) {
    const comentario = row.comentario || 'No hay comentarios';

    const dialogRef = this.dialog.open(DialogoComentarioComponent, {
      data: {
        titulo: 'Reseña de la consulta',
        mensaje: comentario,
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
