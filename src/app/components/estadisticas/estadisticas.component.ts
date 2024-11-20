import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto'; 
import { FirestoreService } from '../../services/firestore.service';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf'; 
import { NgFor, NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, MatDialogModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  turnosPorEspecialidad: any;
  turnosPorDia: any;
  turnosPorMedicoSolicitados: any;
  turnosPorMedicoFinalizados: any;

  fechaInicioSolicitados: string = '';
  fechaFinSolicitados: string = '';

  fechaInicioFinalizados: string = '';
  fechaFinFinalizados: string = '';

  verRegistro: boolean = false;
  registros: any[] = [];


  constructor(private firestoreService: FirestoreService) {}

  formatearFechaSoloDia(fecha: any): string {
    if (!fecha) return '';
    
    if (fecha && fecha.seconds) {
      return new Date(fecha.seconds * 1000).toLocaleDateString('es-ES');
    }
    
    return new Date(fecha).toLocaleDateString('es-ES');
  }
  
  formatearHorario(fecha: any): string {
    if (!fecha) return '';
    
    if (fecha && fecha.seconds) {
      return new Date(fecha.seconds * 1000).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    
    return new Date(fecha).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  ngAfterViewInit() {
    this.firestoreService.getTurnos().then(turnos => {
      const especialidades = turnos.reduce((acc, turno) => {
        acc[turno.especialidad] = (acc[turno.especialidad] || 0) + 1;
        return acc;
      }, {});
      
      this.createBarChart(Object.keys(especialidades), Object.values(especialidades));
    });

    this.firestoreService.getTurnos().then(turnos => {
      const turnosPorFecha = turnos.reduce((acc, turno) => {
        const fecha = turno.fecha.toDate().toLocaleDateString();
        acc[fecha] = (acc[fecha] || 0) + 1;
        return acc;
      }, {});
      
      const fechasOrdenadas = Object.keys(turnosPorFecha).sort((a, b) => {
        return new Date(a).getTime() - new Date(b).getTime();
      });
      
      const datosOrdenados = fechasOrdenadas.map(fecha => turnosPorFecha[fecha]);
      
      this.createLineChart(fechasOrdenadas, datosOrdenados);
    });
  }


  createBarChart(labels: string[], data: number[]) {
    const canvas = document.getElementById('turnosPorEspecialidad') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    this.turnosPorEspecialidad = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Turnos por especialidad',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createLineChart(labels: string[], data: number[]) {
    const canvas = document.getElementById('turnosPorDia') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    this.turnosPorEspecialidad = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Turnos por día',
          data,
          borderColor: 'rgba(153, 102, 255, 1)',
          tension: 0.3
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  onFechaChangeSolicitados() {
    if(this.fechaInicioSolicitados && this.fechaFinSolicitados) {
      this.firestoreService.getTurnos().then(turnos => {
        const inicio = new Date(this.fechaInicioSolicitados);
        const fin = new Date(this.fechaFinSolicitados);
        
        const turnosFiltrados = turnos.filter(turno => {
          const fechaTurno = turno.fecha.toDate();
          return fechaTurno >= inicio && 
                 fechaTurno <= fin && 
                 turno.estado === 'pendiente';
        });

        const turnosPorEspecialista = turnosFiltrados.reduce((acc, turno) => {
          const especialista = turno.especialista;
          acc[especialista] = (acc[especialista] || 0) + 1;
          return acc;
        }, {});

        const canvas = document.getElementById('turnosPorMedicoSolicitados') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;
        
        if (this.turnosPorMedicoSolicitados) {
          this.turnosPorMedicoSolicitados.destroy();
        }

        this.turnosPorMedicoSolicitados = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(turnosPorEspecialista),
            datasets: [{
              label: 'Turnos por Especialista',
              data: Object.values(turnosPorEspecialista),
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    }
  }


  onFechaChangeFinalizados() {
    if(this.fechaInicioFinalizados && this.fechaFinFinalizados) {
      this.firestoreService.getTurnos().then(turnos => {
        const inicio = new Date(this.fechaInicioFinalizados);
        const fin = new Date(this.fechaFinFinalizados);
        
        const turnosFiltrados = turnos.filter(turno => {
          const fechaTurno = turno.fecha.toDate();
          return fechaTurno >= inicio && 
                 fechaTurno <= fin && 
                 turno.estado === 'finalizado';
        });

        const turnosPorEspecialista = turnosFiltrados.reduce((acc, turno) => {
          const especialista = turno.especialista;
          acc[especialista] = (acc[especialista] || 0) + 1;
          return acc;
        }, {});

        const canvas = document.getElementById('turnosPorMedicoFinalizados') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;
        
        if (this.turnosPorMedicoFinalizados) {
          this.turnosPorMedicoFinalizados.destroy();
        }

        this.turnosPorMedicoFinalizados = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(turnosPorEspecialista),
            datasets: [{
              label: 'Turnos por Especialista',
              data: Object.values(turnosPorEspecialista),
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    }
  }

  downloadPDF() {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(44, 62, 80);
    doc.text('Informes & Estadísticas', 105, 20, { align: 'center' });
    
    const canvasEspecialidad = document.getElementById('turnosPorEspecialidad') as HTMLCanvasElement;
    const imgEspecialidad = canvasEspecialidad.toDataURL('image/png');
    
    doc.setFontSize(14);
    doc.text('Cantidad de turnos por especialidad', 105, 35, { align: 'center' });
    doc.addImage(imgEspecialidad, 'PNG', 10, 40, 180, 80);
    
    const canvasDia = document.getElementById('turnosPorDia') as HTMLCanvasElement;
    const imgDia = canvasDia.toDataURL('image/png');
    
    doc.text('Cantidad de turnos por día', 105, 135, { align: 'center' });
    doc.addImage(imgDia, 'PNG', 10, 140, 180, 80);
    
    doc.addPage();
    
    doc.setFontSize(22);
    doc.text('Informes & Estadísticas', 105, 20, { align: 'center' });
    
    const canvasSolicitados = document.getElementById('turnosPorMedicoSolicitados') as HTMLCanvasElement;
    const imgSolicitados = canvasSolicitados.toDataURL('image/png');
    
    doc.setFontSize(14);
    doc.text(`Turnos solicitados por médico desde ${this.fechaInicioSolicitados} hasta ${this.fechaFinSolicitados}`, 105, 35, { align: 'center' });
    doc.addImage(imgSolicitados, 'PNG', 10, 40, 180, 80);
    
    const canvasFinalizados = document.getElementById('turnosPorMedicoFinalizados') as HTMLCanvasElement;
    const imgFinalizados = canvasFinalizados.toDataURL('image/png');
    
    doc.text(`Turnos finalizados por médico desde ${this.fechaInicioFinalizados} hasta ${this.fechaFinFinalizados}`, 105, 135, { align: 'center' });
    doc.addImage(imgFinalizados, 'PNG', 10, 140, 180, 80);

    doc.save('estadisticas.pdf');
  }

  verificarFechasColocadas() {
    return this.fechaInicioSolicitados && this.fechaFinSolicitados && this.fechaInicioFinalizados && this.fechaFinFinalizados;
  }


  // Registros
  verRegistros() {
    this.verRegistro = true;

    this.firestoreService.getLogs().then(logs => {
      console.log(logs);
      this.registros = logs;
    });
  }

  downloadCSV() {
    const registrosData = this.registros.map(registro => {
      return {
        Usuario: registro.user,
        Fecha: this.formatearFechaSoloDia(registro.date),
        Hora: this.formatearHorario(registro.date)
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(registrosData);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registros.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}
