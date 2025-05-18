import { Component } from '@angular/core';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador = 0
  constructor(private contadorService: ContadorService){}

  incrementar(){
    this.contadorService.incrementar()
    this.contador = this.contadorService.getContador()
  }
  decrementar(){
    this.contadorService.decrementar()
    this.contador = this.contadorService.getContador()
    
  }
  resetear(){
    this.contadorService.resetear()
    this.contador = this.contadorService.getContador()
  }
  

}
