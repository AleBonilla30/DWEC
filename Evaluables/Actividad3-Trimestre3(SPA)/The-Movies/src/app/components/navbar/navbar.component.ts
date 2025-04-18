import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){ }

  
  
  buscarPelicula(nombre: string){
    nombre = nombre.trim()
    if (nombre.length === 0) {
      return
    }

    this.router.navigate(['/buscar', nombre])
  }

  

}
