import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { HorariosDirective } from '../../directives/horarios.directive';
import { PdfService } from '../../services/pdf.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HorariosDirective],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-90%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  user: any;

  // Especialista att
  especialidadesEspecialista: string[] = [];
  selectedSpecialty: string | null = null;
  weekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  schedule: { [key: string]: { start: string; end: string } } = {};
  messageError: string = '';
  horariosActualizados: boolean = false;

  // Paciente att
  turnos: any[] = [];
  logoUrl = 'assets/icon_mon.png';
  especialistaSeleccionado: string = 'Todos';
  especialistasPaciente: { id: string, nombre: string }[] = [];

  constructor(private userService: UserService, private firestoreService: FirestoreService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.userService.getUserProfile()
      .then((res) => {
        this.user = res;

        if(this.user.rol === 'especialista') {
          if (this.user && typeof this.user.especialidad === 'object') {
            this.especialidadesEspecialista = Object.keys(this.user.especialidad);
          }
          else {
            console.error('Error al obtener las especialidades del usuario');
          }
        }
        else if(this.user.rol === 'paciente') {
          this.firestoreService.getTurnosFinalizadosPorPaciente(this.user.id)
            .then((turnos) => {
              this.turnos = turnos;
              this.turnos.sort((a, b) => a.fecha.seconds - b.fecha.seconds);
              this.cargarEspecialistasUnicos();
            });
        }
      });

    this.weekDays.forEach(day => {
      this.schedule[day] = { start: '', end: '' };
    });

  }


  cargarEspecialistasUnicos() {
    const especialistasMap = new Map();
    this.turnos.forEach(turno => {
      const id = turno.idEspecialista;
      const nombre = turno.especialista;

      if (!especialistasMap.has(id)) {
        especialistasMap.set(id, nombre);
      }
    });

    this.especialistasPaciente = Array.from(especialistasMap, ([id, nombre]) => ({ id, nombre }));
  }

  descargarHistoriaClinica() {
    const turnosFiltrados = this.especialistaSeleccionado === 'Todos'
      ? this.turnos
      : this.turnos.filter(turno => turno.idEspecialista === this.especialistaSeleccionado);

    this.pdfService.generarHistoriaClinicaPDF(this.user, turnosFiltrados, this.logoUrl);
  }

  onSpecialtyChange() {
    if (this.selectedSpecialty) {
      this.firestoreService.obtenerHorariosEspecialidad(this.user.id, this.selectedSpecialty)
        .then(scheduleData => {
          this.schedule = this.mapFirestoreScheduleToLocal(scheduleData);
        })
        .catch(error => console.error('Error al obtener el horario:', error));
    }
  }
  
  mapFirestoreScheduleToLocal(scheduleData: any[]) {
    let scheduleTmp: { [key: string]: { start: string; end: string } } = {};;
    
    this.weekDays.forEach(day => {
      scheduleTmp[day] = { start: '', end: '' };
    });

    // console.log(scheduleTmp);
    // console.log(scheduleData);

    scheduleData.forEach(daySchedule => {
      // console.log(daySchedule)

      scheduleTmp[daySchedule.dia] = {
        start: daySchedule.hora_inicio,
        end: daySchedule.hora_fin
      };
    });
    return scheduleTmp;
  }

  updateSchedule() {
    if (this.selectedSpecialty) {
      let valid = true;
      this.horariosActualizados = false;
  
      this.weekDays.forEach(day => {
        const startHour = this.schedule[day].start ? Number(this.schedule[day].start) : null;
        const endHour = this.schedule[day].end ? Number(this.schedule[day].end) : null;
        let maxHour = 19;
        let minHour = 8;
        
        if(day == 'Sabado'){
          maxHour = 14;
        }
        
        if (startHour !== null && startHour !== 0 && (startHour < minHour || startHour > maxHour)) {
          this.messageError = `El horario de atencion para el dia ${day} es de ${minHour}hs a ${maxHour}hs.`;
          valid = false;
        }
        if (endHour !== null && startHour !== 0 && (endHour < minHour || endHour > maxHour)) {
          this.messageError = `El horario de atencion para el dia ${day} es de ${minHour}hs a ${maxHour}hs.`;
          valid = false;
        }
        if (startHour !== null && startHour !== 0 && endHour !== null && startHour >= endHour) {
          this.messageError = `La hora de entrada para el ${day} debe ser menor que la de salida.`;
          valid = false;
        }
      });
  
      if (valid) {
        // this.firestoreService.updateSpecialtySchedule(this.selectedSpecialty, this.schedule)
        //   .then(() => console.log('Horario actualizado exitosamente'))
        //   .catch(error => console.error('Error al actualizar horario:', error));
        this.horariosActualizados = true;
        this.messageError = '';
        console.log('Todo valido')
        this.firestoreService.actualizarHorariosEspecialidad(this.user.id, this.selectedSpecialty, this.schedule);
      } else {
        console.log('Horarios no validos');
      }
    }
  }
}
