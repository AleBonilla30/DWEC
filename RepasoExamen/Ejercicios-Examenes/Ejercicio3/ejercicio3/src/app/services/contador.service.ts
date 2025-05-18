import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  contador = 0

  historial: string[] = []
  incrementar(){
    this.contador++;
    this.historial.push(`Incremento a ${this.contador}`)
  }

  decrementar(){
    this.contador--
    this.historial.push(`Decremento a ${this.contador}`)
  }
  resetear(){
    this.contador = 0
  }
  getContador(){
    return this.contador
  }

  getHistorial(){
    return this.historial
  }
}
