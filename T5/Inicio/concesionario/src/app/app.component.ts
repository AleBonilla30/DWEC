import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Coche } from './model/Coche';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concesionario';
  marcaCoche = "";
  modeloCoche ="";
  cvCoche = 0
  ccCoche = 0
  tipoMotorCoche = ""
  matriculaCoche = ""
  precioCoche = 0
  imagenCoche = ''

  cochesFiltrados : Coche[] = []
  coches: Coche[] = [];

  tipoMotorFiltro = ''
  precioMinimo = 0

  agregarCoches(){

    if (!this.marcaCoche || !this.modeloCoche || !this.cvCoche || !this.ccCoche || !this.tipoMotorCoche || !this.matriculaCoche || !this.precioCoche) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos correctamente.',
        confirmButtonText: 'Entendido'
      });
      return;
    }else{

      if (this.marcaCoche === "1") {
        this.imagenCoche = 'assets/mercedes.jpeg'
      }else if (this.marcaCoche === "2"){
        this.imagenCoche = "assets/toyota.jpg"
      }else if (this.marcaCoche === "3") {
        this.imagenCoche = 'assets/mazda.jpg'
      }else if (this.marcaCoche === "4") {
        this.imagenCoche = 'assets/volkswagen.jpeg'
      }else{
        this.imagenCoche = 'assets/kia.jpg'
      }
      
      let coche: Coche = {
      marca: this.marcaCoche,
      modelo: this.modeloCoche,
      cv: this.cvCoche,
      cc: this.ccCoche,
      tipoMotor: this.tipoMotorCoche,
      matricula: this.matriculaCoche,
      precio: this.precioCoche,
      image: this.imagenCoche
      }


    this.coches.push(coche);
    this.filtrarCoches()
    this.vaciarDatos()

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Coche agregado!',
      text: 'El coche se ha registrado correctamente.',
      timer: 3000,
      showConfirmButton: false
    });
    }
    
  }
  filtrarCoches (){
      this.cochesFiltrados = this.coches.filter(item => 
        (!this.tipoMotorFiltro || item.tipoMotor.toLowerCase() === this.tipoMotorFiltro.toLowerCase()) && 
        (!this.precioMinimo || item.precio >= this.precioMinimo)
      );

    Swal.fire({
      icon: 'info',
      title: 'Búsqueda realizada',
      text: `Se encontraron ${this.cochesFiltrados.length} coches.`,
      confirmButtonText: 'Mostrar'
    });
  }

  vaciarDatos(){
    this.marcaCoche = ''
    this.modeloCoche = ''
    this.cvCoche = 0
    this.ccCoche = 0
    this.tipoMotorCoche = ''
    this.matriculaCoche = ''
    this.precioCoche = 0
  }
}
