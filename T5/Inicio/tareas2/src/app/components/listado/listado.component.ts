import { Component } from '@angular/core';
import { log } from 'console';
import { Conocimiento } from '../../model/modelos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  nombreConocimiento = '';
  nivelConocimiento = '';
  imagen = ''

  conocimientos: Conocimiento [] = [];
  url = 'https://media.istockphoto.com/id/1164357236/es/foto/desarrollo-de-programadores-que-leen-c%C3%B3digos-inform%C3%A1ticos-desarrollo-de-dise%C3%B1o-de-sitios-web-y.jpg?s=612x612&w=0&k=20&c=bYXBXslxc4awnRQQC7HCsYQEhzsHbmir87OVuD_f0ac='
  

  guardarElemento(){

    if (this.nombreConocimiento.length == 0 && this.nivelConocimiento.length == 0) {
      Swal.fire({
        title: "Fallo",
        text: "Faltan datos por rellenar",
        icon: "warning"
      });
    }else{
    

      if (this.nivelConocimiento === "1") {
        this.imagen = 'assets/bajo.jpg'
      }else if (this.nivelConocimiento === "2") {
        this.imagen = 'assets/medio.jpg'
      } else {
        this.imagen = 'assets/alto.jpg'
      }

      console.log(this.imagen);
      
      let conocimiento: Conocimiento = {
        nombre: this.nombreConocimiento, 
        nivel: this.nivelConocimiento,
        imagen: this.imagen
      }
      this.conocimientos.push(conocimiento)
      this.limpiarElemento()
    }
  }

  limpiarElemento(){
    this.nombreConocimiento = ''
    this.nivelConocimiento = ''
  }

}
