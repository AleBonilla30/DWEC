import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor = 'Alejandra Gonzalez';
  asignatura = 'Desarrollo web entorno cliente';

  seleccion = 1

  constructor(private router: Router){}
  
  navegar(){
    this.router.navigate(["listado", this.seleccion])//se puede hacer de esta manera para poder navegar, AQUI SE LE PASA EL PATH
  }

}
