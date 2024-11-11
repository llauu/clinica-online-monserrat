import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  
  generarHistoriaClinicaPDF(paciente: any, turnos: any[], logoUrl: string) {
    const doc = new jsPDF();
    const fechaEmision = new Date().toLocaleDateString();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Encabezado con logo y titulo
    doc.addImage(logoUrl, 'PNG', pageWidth / 2 - 25, 10, 50, 30);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Historia Clínica', pageWidth / 2, 55, { align: 'center' });
    doc.setFontSize(12);
    doc.text('Clínica Online Monserrat & Asociados', pageWidth / 2, 63, { align: 'center' });
    doc.setFontSize(10);
    doc.text(`Fecha de emisión: ${fechaEmision}`, pageWidth / 2, 70, { align: 'center' });

    // Informacion del paciente con fondo y borde
    doc.setFillColor(230, 230, 250);
    doc.roundedRect(10, 80, pageWidth - 20, 45, 3, 3, 'F');
    doc.setTextColor(40);
    doc.setFontSize(13);
    doc.text(`Paciente: ${paciente.nombre} ${paciente.apellido}`, 15, 90);
    doc.text(`DNI: ${paciente.dni}`, 15, 98);
    doc.text(`Obra social: ${paciente.obraSocial}`, 15, 106);
    doc.text(`Edad: ${paciente.edad}`, 15, 114); 

    // Encabezado de atenciones
    doc.setFontSize(15);
    doc.setTextColor(60, 100, 180);
    doc.text('Turnos del Paciente', 10, 135);

    // Tabla de atenciones
    let startY = 145;
    turnos.forEach((turno, index) => {
      const { fecha, hora, especialista, especialidad, comentario, historiaClinica } = turno;

      // Si el contenido alcanza el final de la página, agrega una nueva
      if (startY > 270) {
        doc.addPage();
        startY = 20;
      }

      // Cabecera de cada turno
      doc.setFillColor(245, 245, 245);
      doc.roundedRect(10, startY, pageWidth - 20, 10, 2, 2, 'F');
      doc.setTextColor(50);
      doc.setFontSize(13);
      doc.text(`Turno del día ${this.formatFecha(fecha)}`, 12, startY + 7);

      // Detalles del turno
      startY += 12;
      doc.setFontSize(11);
      doc.setTextColor(80);
      doc.text(`Horario: ${hora} hs`, 15, startY);
      doc.text(`Especialista: ${especialista}`, 80, startY);
      doc.text(`Especialidad: ${especialidad}`, 145, startY);

      startY += 8;
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(`Comentario: ${comentario || 'Sin comentarios'}`, 15, startY);

      // Historia Clinica
      if (historiaClinica) {
        startY += 10;
        
        // Si el contenido alcanza el final de la página, agrega una nueva
        if (startY > 270) {
          doc.addPage();
          startY = 20;
        }

        doc.setFontSize(11);
        doc.setTextColor(60, 100, 180);
        doc.text('Detalles de Historia Clínica:', 15, startY);

        startY += 8;
        doc.setTextColor(80);
        doc.text(`Altura: ${historiaClinica.altura} cm`, 15, startY);
        doc.text(`Peso: ${historiaClinica.peso} kg`, 80, startY);
        doc.text(`Temperatura: ${historiaClinica.temperatura} °C`, 145, startY);

        startY += 8;
        doc.text(`Presión: ${historiaClinica.presion}`, 15, startY);

        // Datos dinamicos
        if (historiaClinica.datosDinamicos && historiaClinica.datosDinamicos.length > 0) {
          historiaClinica.datosDinamicos.slice(0, 3).forEach((dato: any, idx: number) => {
            switch (idx) {
              case 0:
                doc.text(`${dato.clave}: ${dato.valor}`, 80, startY);
                break;
              case 1:
                doc.text(`${dato.clave}: ${dato.valor}`, 145, startY);
                break;
              case 2:
                startY += 8;
                doc.text(`${dato.clave}: ${dato.valor}`, 15, startY);
                break;
            }
          });
        }
        
      }

      startY += 12;
    });

    
    doc.save(`Historia_Clinica_${paciente.nombre}_${paciente.apellido}.pdf`);
  }
  
  formatFecha(value: Timestamp | null): string {
    if (value instanceof Timestamp) {
      const date = value.toDate(); 
      return formatDate(date, 'd MMM. y', 'en-US'); 
    }
    return '';
  }
}
