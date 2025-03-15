import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  user = {
    nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    empresa: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private toastService: ToastService){}

  register(){

    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.toastService.showSuccess(`Usuario registrado exitosamente ${response}`);
      },
      error: (error) => {
        this.toastService.showError(`No se ha podido registrar al usuario ${error}`);
      },
      complete: () => {
        console.log("Completado");
      }
    });
    this.clear()
  }

  clear(){
    this.user.nombre = ''
    this.user.primer_apellido = ''
    this.user.segundo_apellido = ''
    this.user.empresa = ''
    this.user.email = ''
    this.user.password = ''
  }

}
