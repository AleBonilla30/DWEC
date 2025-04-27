import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros.component';

const routes: Routes = [
  {path:"", redirectTo:"libros", pathMatch: 'full'},
  {path:"libros", component: LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
