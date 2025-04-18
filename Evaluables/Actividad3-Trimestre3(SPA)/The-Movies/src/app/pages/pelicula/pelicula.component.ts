import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from '../../interfaces/details';
import { Cast } from '../../interfaces/credits';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit {

  pelicula?: MovieDetails
  cast: Cast[] = []
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService){

  }
  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([//se utiliza para combinar varioa observables
      this.movieService.getMovieDetails(id),
      this.movieService.peliculaCreditos(id)
    ]).subscribe(([movie, cast])=>{
      if (movie === null || cast === null) {
        console.error("Error: La pelicula o el reparto no se encontraron");
        return
      }
      this.pelicula = movie
      this.cast = cast
    })
  }

  getStars(voteAverage:number){

    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }

  regresar(){
    window.history.back()
  }

}
