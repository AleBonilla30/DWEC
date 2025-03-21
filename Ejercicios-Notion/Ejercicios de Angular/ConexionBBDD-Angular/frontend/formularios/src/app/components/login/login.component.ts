import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLogin = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private toastService: ToastService){}

  login(){
    this.authService.login(this.userLogin).subscribe({
      next: (Response) =>{
      
        this.toastService.showSuccess(`Inicio de sesión exitoso ${Response}`)
      },
      error:  (error) =>{

        this.toastService.showError(`Error en el inicio de sesión ${error}`)
      }
    }
    )
    this.clear()
  }

  clear(){
    this.userLogin.email = ''
    this.userLogin.password = ''
  }

}
