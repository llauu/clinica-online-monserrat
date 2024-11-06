import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FirestoreService } from '../../services/firestore.service';
import { MatOption, MatSelect } from '@angular/material/select';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TimestampPipe } from '../../pipes/timestamp.pipe';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-solicitar-turno',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelect,
    MatOption,
    NgIf,
    NgFor,
    CommonModule,
    TimestampPipe
  ],
  templateUrl: './solicitar-turno.component.html',
  styleUrl: './solicitar-turno.component.css'
})
export class SolicitarTurnoComponent {
  especialidadesDisponibles: any[] = [];
  especialidadSeleccionada: string = '';
  
  especialistasDisponibles: any[] = [];
  especialistaSeleccionado: any = null;

  pacientesDisponibles: any[] = [];
  pacienteSeleccionado: any = null;

  diasDisponibles: { dia: any; fecha: string }[] = [];
  turnosDisponibles: { [key: string]: string[] } = {};
  
  turnoSeleccionado: { fecha: string; hora: string } | null = null;

  rolUsuarioIniciado: string = this.userService.getRol();

  constructor(private firestoreService: FirestoreService, private userService: UserService, private toastSrv: ToastrService, private router: Router) {}

  async ngOnInit() {
    if(this.rolUsuarioIniciado === 'admin') {
      this.pacientesDisponibles = await this.firestoreService.getPacientes();
    }

    this.especialidadesDisponibles = await this.firestoreService.getEspecialidadesConImagen();
    this.generarDiasDisponibles(); 
  }

  async traerEspecialistas() {
    this.especialistasDisponibles = await this.firestoreService.getEspecialistas(this.especialidadSeleccionada);
  }

  atras() {
    this.especialistasDisponibles = [];
  }

  async obtenerTurnosDisponibles() {
    const turnosDisponibles: { [dia: string]: string[] } = {};
  
    // Verificar si hay un especialista seleccionado
    if (!this.especialistaSeleccionado || !this.especialistaSeleccionado.especialidad) {
      console.error("No hay especialista seleccionado o no tiene especialidad.");
      return;
    }
  
    // Obtén los turnos ya solicitados para el especialista seleccionado
    const turnosSolicitados = await this.firestoreService.getTurnosPorEspecialistaYEspecialidad(this.especialistaSeleccionado.id, this.especialidadSeleccionada);
  
    // Filtrar solo los turnos que están en estado "pendiente" o "aceptado"
    const turnosOcupados = turnosSolicitados.filter(turno => 
      turno['estado'] === 'pendiente' || turno['estado'] === 'aceptado'
    );

    // Iterar sobre los horarios del especialista
    this.especialistaSeleccionado.especialidad[this.especialidadSeleccionada].forEach((horario: any) => {
      const { dia, hora_inicio, hora_fin } = horario;
  
      // Verificar si el especialista no atiende ese dia
      if (hora_inicio === '0' && hora_fin === '0') {
        return;
      }
  
      const intervalosDia: string[] = [];
  
      // Convertir hora_inicio y hora_fin a string y asegurar que tengan dos digitos
      const formattedHoraInicio = String(hora_inicio).padStart(2, '0');
      const formattedHoraFin = String(hora_fin).padStart(2, '0');
  
      // Convertimos las horas de inicio y fin a Date para calcular intervalos de media hora
      const inicio = new Date(`1970-01-01T${formattedHoraInicio}:00`);
      const fin = new Date(`1970-01-01T${formattedHoraFin}:00`);
  

      // Generamos intervalos de 30 minutos y verificamos si están ocupados
      while (inicio < fin) {
        const turnoHora = inicio.toTimeString().slice(0, 5); // Formato "HH:MM"
        const turnoFecha = this.diasDisponibles.find(d => d.dia === dia)?.fecha;
  

        // Verificar si el turno ya está ocupado en esta fecha y hora
        const turnoOcupado = turnosOcupados.some(turno => {
          const fechaTurno = turno['fecha'].toDate(); // Convierte la marca de tiempo a un objeto Date

          // Extrae el día, mes y año, asegurando que el día y el mes tengan dos dígitos
          const dia = String(fechaTurno.getDate()).padStart(2, '0');
          const mes = String(fechaTurno.getMonth() + 1).padStart(2, '0'); // getMonth() devuelve el mes de 0 a 11
          const anio = fechaTurno.getFullYear();

          // Combina en el formato deseado "dd/mm/yyyy"
          const fechaFormateada = `${dia}/${mes}/${anio}`;
          
          return fechaFormateada === turnoFecha && turno['hora'] === turnoHora;
        });

        if (!turnoOcupado) {
          intervalosDia.push(turnoHora); // Agrega solo si no está ocupado
        }
  
        inicio.setMinutes(inicio.getMinutes() + 30); // Incrementar 30 minutos
      }
  
      turnosDisponibles[dia] = intervalosDia;
    });
  
    this.turnosDisponibles = turnosDisponibles;
  }
  

  generarDiasDisponibles() {
    const hoy = new Date();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; // Nombres de días sin tildes

    for (let i = 0; i < 15; i++) {
        const fecha = new Date(hoy);
        fecha.setDate(hoy.getDate() + i);

        // Obtener el nombre del día sin tildes usando el índice del array
        const diaNombre = diasSemana[fecha.getDay()]; // getDay() devuelve el índice del día de la semana (0 = domingo, 6 = sábado)
        const diaNombreCapitalizado = diaNombre.charAt(0).toUpperCase() + diaNombre.slice(1);

        // Formatear la fecha en DD/MM/YYYY
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const fechaFormateada = `${dia}/${mes}/${anio}`;

        this.diasDisponibles.push({ dia: diaNombreCapitalizado, fecha: fechaFormateada });
    }
  }

  
  seleccionarTurno(fecha: string, hora: string) {
    this.turnoSeleccionado = { fecha, hora };
    // console.log(`Turno seleccionado: ${fecha} a las ${hora}`);
  }

  async solicitarTurno() {
    if (!this.turnoSeleccionado) {
      console.error("No hay turno seleccionado.");
      return;
    }
    
    const partes = this.turnoSeleccionado.fecha.split('/');
    const fecha = new Date(+partes[2], +partes[1] - 1, +partes[0]);

    const hora = this.turnoSeleccionado.hora;
    const { nombre, apellido } = this.especialistaSeleccionado;
    const idEspecialista = this.especialistaSeleccionado.id;
    const especialidad = this.especialidadSeleccionada;
    let paciente = '';
    let idPaciente = '';

    if(this.rolUsuarioIniciado === 'admin') {
      paciente = `${this.pacienteSeleccionado.nombre} ${this.pacienteSeleccionado.apellido}`;
      idPaciente = this.pacienteSeleccionado.id;
    } 
    else {
      paciente = this.userService.getNombreApellido();
      idPaciente = this.userService.getId();
    }

    const turno = {
      fecha,
      hora,
      especialidad,
      especialista: `${nombre} ${apellido}`,
      idEspecialista,
      paciente,
      idPaciente,
      estado: 'pendiente',
    };

    const idDoc = await this.firestoreService.createDocument('turnos', turno);

    if(idDoc) {
      this.toastSrv.success(
        `¡Tu turno para ${especialidad} ha sido solicitado con exito!`,
        'Solicitud de Turno Exitosa'
      );

      this.router.navigate(['/mis-turnos']);
    }
    else {
      this.toastSrv.error('Error al solicitar turno', 'Error');
    }
  }  
}
