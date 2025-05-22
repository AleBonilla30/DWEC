import { Component } from '@angular/core';
import { Movies } from '../../model/movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  movies!: Movies[]

  constructor(private movieService: DataService){
    this.movieService.getAllMovies().subscribe(movie => {
      this.movies = movie
    })

  }
}
