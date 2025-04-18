import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/cartelera';

@Component({
  selector: 'app-buscar',
  standalone: false,
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {

  texto = ""
  movies:Movie[]=[]
  noMovie=""

  constructor(private activatedRouter: ActivatedRoute, private movieService: MovieService){}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      this.texto = params['texto']
      console.log(this.texto);

      this.movieService.buscarPeliculas(this.texto).subscribe(movie=>{
        this.movies = movie
        if (movie.length === 0) {
          this.noMovie = "No se encontro ninguna pelicula"
        }
      })
      
    })
  }
  
  regresar(){
    window.history.back()
  }

}
