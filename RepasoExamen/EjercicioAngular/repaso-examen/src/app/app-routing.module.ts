import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { CartasLibroComponent } from './components/cartas-libro/cartas-libro.component';

const routes: Routes = [
  {path: "", redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: ListaLibrosComponent},
  {path: 'carta', component: CartasLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
