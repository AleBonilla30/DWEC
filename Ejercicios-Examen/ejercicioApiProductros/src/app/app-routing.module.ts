import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { Filtros1Component } from './components/filtros1/filtros1.component';
import { Filtros2Component } from './components/filtros2/filtros2.component';

const routes: Routes = [
  {path:"productos", component: ProductosComponent},
  {path:'filtros1', component: Filtros1Component},
  {path:'filtros2', component: Filtros2Component},
  {path: "", redirectTo: "productos", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
