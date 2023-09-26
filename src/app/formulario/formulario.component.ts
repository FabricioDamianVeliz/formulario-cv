import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  foto: File | null = null;
  fotoUrl: string | null = null;
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  direccion: string = '';
  codigoPostal: string = '';
  localidad: string = '';

  constructor() { }

  onFileSelected(event: any) {
    // Lógica para manejar la selección de la foto
    this.foto = event.target.files[0] || null;

    // Mostrar la foto seleccionada en la previsualización
    if (this.foto) {
      const reader = new FileReader();
      reader.readAsDataURL(this.foto);
      reader.onloadend = () => {
        this.fotoUrl = reader.result as string;
      };
    } else {
      this.fotoUrl = null;
    }
  }

  generarCV() {
    const doc = new jsPDF();

    // Verificar si la variable 'foto' tiene un valor válido
    if (this.foto) {
      // Si 'foto' tiene un valor, se procede a agregar la imagen al PDF
      const reader = new FileReader();
      reader.readAsDataURL(this.foto);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        doc.addImage(base64data, 'JPEG', 15, 15, 40, 40); // Ajusta las coordenadas y dimensiones según sea necesario
        this.agregarDatosAlPDF(doc); // Agrega los datos de texto al PDF
        doc.save('cv.pdf');
      };
    } else {
      // Si 'foto' es null o undefined, se genera el PDF sin la imagen
      this.agregarDatosAlPDF(doc); // Agrega los datos de texto al PDF
      doc.save('cv.pdf');
    }
  }

  private agregarDatosAlPDF(doc: jsPDF) {
    const lineHeight = 12;
    const xOffset = 15;
    const yOffset = 70;

    // Estilo para el título del CV
    doc.setFont('Arial', 'bold');
    doc.setFontSize(24);
    doc.setTextColor('#1E88E5'); // Color azul
    doc.text('Curriculum Vitae', xOffset, yOffset);

    // Estilo para los datos personales
    doc.setFont('Arial', 'normal');
    doc.setFontSize(12);
    doc.setTextColor('#424242'); // Color gris oscuro
    doc.text('Nombre:', xOffset, yOffset + 2 * lineHeight);
    doc.setTextColor('#000000'); // Color negro
    doc.text(this.nombre, xOffset + 45, yOffset + 2 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Apellidos:', xOffset, yOffset + 3 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.apellidos, xOffset + 45, yOffset + 3 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Correo Electrónico:', xOffset, yOffset + 4 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.correo, xOffset + 45, yOffset + 4 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Teléfono:', xOffset, yOffset + 5 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.telefono, xOffset + 45, yOffset + 5 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Dirección:', xOffset, yOffset + 6 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.direccion, xOffset + 45, yOffset + 6 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Código Postal:', xOffset, yOffset + 7 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.codigoPostal, xOffset + 45, yOffset + 7 * lineHeight);

    doc.setTextColor('#424242');
    doc.text('Localidad:', xOffset, yOffset + 8 * lineHeight);
    doc.setTextColor('#000000');
    doc.text(this.localidad, xOffset + 45, yOffset + 8 * lineHeight);

  }
}















