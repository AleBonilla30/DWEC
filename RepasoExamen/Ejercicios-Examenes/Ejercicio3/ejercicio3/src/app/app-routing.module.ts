import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContadorComponent } from './components/contador/contador.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path:'lista', component:ListaComponent},
  {path:'contador', component: ContadorComponent},
  {path:'**', redirectTo:'lista', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
