import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ErrorComponent } from './components/error/error.component';

//las rutas se evaluan en cascada
const routes: Routes = [//aqui tenemos elementos de tipo json donde se define como se comporta las rutas
  {path:"", redirectTo:"asignaturas", pathMatch:"full"},//este es la ruta por defecto que redirige a un componente
  {path:"asignaturas/:id", component:AsignaturasComponent},//redirige a los componentes
  {path:"tecnologias", component:TecnologiasComponent, 
    children:[
      {path:"angular", component:AsignaturasComponent}, 
      {path:"react", component:ListadoComponent}
    ]
  },//esto tiene rutas hijas EN ESTE CASO SE LLEVA A COMPONENTE SIMULADO LOS QUE YA ESTAN CREADOS
  {path:"listado/:id", component:ListadoComponent},
  {path:"**", component:ErrorComponent}//se redirige al componente error, es la tipica ppagina de erro 404 siempre tiene que ir en la ultima

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
