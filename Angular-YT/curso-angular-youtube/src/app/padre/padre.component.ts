import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [ HijoComponent ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  //mensaje que se le envia al hijo
  datosPadre: string = 'Mensaje desde el padre';

  //recibir mensaje del hijo
  recibirDatos: string = '';

recibirMensaje($event: string){
  this.recibirDatos = $event;
}





  valorcontador: number = 0

    incrementar(){
      this.valorcontador++;
    }

    decrementar(){
      this.valorcontador--;
    }


}
