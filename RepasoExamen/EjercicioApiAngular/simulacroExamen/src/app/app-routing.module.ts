import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

const routes: Routes = [
  {path:'productos', component: ProductosComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: '', redirectTo: 'productos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
