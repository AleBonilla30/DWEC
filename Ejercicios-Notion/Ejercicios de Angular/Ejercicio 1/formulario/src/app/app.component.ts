import {  Component } from '@angular/core';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
  modalTitle: string = ''
  modalContent: string = ''

  mostrar = false
  

  nombre = ""
  edad = 0

  usuarios: Usuario[] = []

  guardarUsuarios(){
    let usuario: Usuario = {
      nombre: this.nombre,
      edad: this.edad
    }
    this.usuarios.push(usuario)
    this.limpiarUsuario()
  }

  limpiarUsuario(){
    this.nombre = ""
    this.edad = 0
  }

  openModal(content: string){
    if (content === 'stock') {
      this.modalTitle = 'Stock';
      this.modalContent = 'Aquí puedes gestionar tu inventario de ingredientes, organizarlos por ubicación y recibir alertas de caducidad.';
    } else if (content === 'recetas') {
      this.modalTitle = 'Recetas inteligentes';
      this.modalContent = 'Descubre recetas basadas en los ingredientes que tienes disponibles y reduce el desperdicio.';
    } else if (content === 'registro'){
      this.modalTitle = 'Registro de prodcutos';
      this.modalContent = 'Recibe alertas cuando un prooducto esta a punto de caducar .';
    }
  

  }
}
