import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as XLSX from 'xlsx';
import { formatDate, NgFor, NgIf } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';
import { TimestampPipe } from '../../pipes/timestamp.pipe';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

export interface UsuarioData {
  id: string;
  nombre: string;
  apellido: string;
  dni: string;
  edad: string;
  email: string;
  rol: string;
  imagenUno: string;
  obraSocial: string;
  habilitado?: boolean;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
    imports: [
      NgIf,
      NgFor,
      TimestampPipe,
      MatIconModule
    ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: UsuarioData[] = [];

  usuarioSeleccionado: UsuarioData | null = null;
  turnosUsuarioSeleccionado: any[] = [];

  constructor(private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.firestoreService.getUsuarios() 
      .then((data) => {
        this.usuarios = data; 
      });
  }

  async onClickUsuario(usuario: UsuarioData) {
    this.usuarioSeleccionado = usuario;
    this.turnosUsuarioSeleccionado = await this.firestoreService.getTurnosPorPaciente(usuario.id); 
    
    if(this.usuarioSeleccionado.rol === 'paciente') {
      this.downloadTurnos(); 
    }
  }

  habilitarEspecialista(especialista: UsuarioData) {
    especialista.habilitado = true;
    this.firestoreService.habilitarEspecialista(especialista.id);
  }

  redirectToRegister(role: string) {
    this.router.navigate(['/registro-admin', role]);
  }

  downloadUsuariosCSV(): void {
    const usuariosData = this.usuarios.map(usuario => {
      return {
        Nombre: usuario.nombre,
        Apellido: usuario.apellido,
        DNI: usuario.dni,
        Edad: usuario.edad,
        Email: usuario.email,
        Rol: usuario.rol,
        ObraSocial: usuario.rol === 'paciente' ? usuario.obraSocial : '-',
        Habilitado: usuario.rol === 'especialista' ? (usuario.habilitado ? 'Si' : 'No') : '-',
      };
    });
  
    const worksheet = XLSX.utils.json_to_sheet(usuariosData);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
  
    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  downloadTurnos(): void {
    const turnos = this.turnosUsuarioSeleccionado.map(turno => ({
      Especialidad: turno.especialidad,
      Fecha: this.formatFecha(turno.fecha),
      Hora: turno.hora,
      Paciente: turno.paciente,
      Especialista: turno.especialista,
      Estado: turno.estado,
      Comentario: turno.comentario,
    }));

    const worksheet = XLSX.utils.json_to_sheet(turnos);
    const workbook: XLSX.WorkBook = { Sheets: { 'Turnos': worksheet }, SheetNames: ['Turnos'] };
    XLSX.writeFile(workbook, `${this.usuarioSeleccionado?.nombre}_${this.usuarioSeleccionado?.apellido}_turnos.xlsx`);
  }

  formatFecha(value: Timestamp | null): string {
    if (value instanceof Timestamp) {
      const date = value.toDate(); 
      return formatDate(date, 'd MMM. y', 'en-US'); 
    }
    return '';
  }
}
