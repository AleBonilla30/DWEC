import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

//este es el mensaje que recibe desde el padre con Input
  @Input() datosRecibido: string = '';

  //envio de datos a otros componentes en este caso al padre con output

  @Output() datosEnviados = new EventEmitter<string>();
  mensaje: string = '';

  enviarDatos(){
    this.datosEnviados.emit(this.mensaje)
  }
}
