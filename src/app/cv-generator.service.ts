import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class CvGeneratorService {
  constructor() {}

  generarCV(cvData: any) {
    const doc = new jsPDF();

    doc.setFont('Roboto'); // Asigna la fuente personalizada, si la tienes
    doc.setFontSize(18);
    //doc.setFontStyle('bold'); // Establece el estilo de fuente a 'bold'
    doc.text('Curriculum Vitae', 20, 20);

    doc.setFontSize(14);
    //doc.setFontStyle('normal'); // Establece el estilo de fuente a 'normal'
    doc.text(`Nombre: ${cvData.nombre}`, 20, 30);
    doc.text(`Puesto: ${cvData.puesto}`, 20, 40);
    doc.text(`Experiencia: ${cvData.experiencia}`, 20, 50);
    doc.text(`Educación: ${cvData.educacion}`, 20, 60);

    // Opcionalmente, puedes utilizar la función autoTable de jspdf-autotable para generar tablas más complejas.
    // Por ejemplo:
    // const columns = ['ID', 'Nombre', 'Edad'];
    // const rows = [
    //   [1, 'Juan', 25],
    //   [2, 'María', 30],
    //   [3, 'Pedro', 28]
    // ];
    // doc.autoTable(columns, rows, { startY: 70 });

    doc.save('cv.pdf');
  }
}












