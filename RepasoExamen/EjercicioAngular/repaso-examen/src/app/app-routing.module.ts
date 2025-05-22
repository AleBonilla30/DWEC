import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { CartasLibroComponent } from './components/cartas-libro/cartas-libro.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: "", redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: ListaLibrosComponent},
  {path: 'carta', component: CartasLibroComponent},
  {path:'post', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
