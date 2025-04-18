import { Component, Input} from '@angular/core';
import { Movie } from '../../interfaces/cartelera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster',
  standalone: false,
  templateUrl: './movies-poster.component.html',
  styleUrl: './movies-poster.component.css'
})
export class MoviesPosterComponent {
  @Input() movies?: Movie[]



  constructor(private router: Router, ){}


  getStars(voteAverage: number){
    const starCount = Math.floor(voteAverage)

    return Array(starCount).fill(0)//lo que hace esto es que lo va a llenar con las estrellas de las votaciones
  }

  loadMoviePages(movies: Movie){
    this.router.navigate(["/pelicula",movies.id])
  }


}
