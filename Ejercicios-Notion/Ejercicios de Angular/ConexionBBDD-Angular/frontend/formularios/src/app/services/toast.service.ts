import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastr: ToastrService) { }

  //exito
  showSuccess(message: string): void  {
    this.toastr.success(message, 'Exito')
  }

  //mostrar error 
  showError(message: string): void{
    this.toastr.error(message, 'Error')
  }

  //mostrar informacion 
  showInfo(message: string): void{
    this.toastr.info(message, 'Error')
  }
}
