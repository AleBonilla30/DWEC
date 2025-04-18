import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of} from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetails } from '../interfaces/details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  URL = 'https://api.themoviedb.org/3';
  apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDkxMDc4YWZlODFjZWM0YzI1YjBjZTdhZTU2OWUyMiIsIm5iZiI6MTc0MzE2MzYwNy44NzEsInN1YiI6IjY3ZTY5MGQ3MzNhNzQzNDFlMzEwZWZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zrt47BM8U0TOQl0vmwYtmJGwJuzLB9P_trdyTYhll5s';
  header ={Authorization:`Bearer ${this.apiKey}`}
  


  constructor( private http: HttpClient) { }


  getCartelera():Observable<Movie[]>{
    return this.http.get<CarteleraResponse>(`${this.URL}/movie/now_playing?language=es-ES&page=1`, {headers:this.header}).pipe(
      map((res)=> res.results)
    )
  }

  getMovieDetails(movieId: number): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(`${this.URL}/movie/${movieId}?language=es-ES`, {headers:this.header})
  }

  peliculaCreditos(id:string):Observable<Cast[] | null>{

    return this.http.get<Credits>(`${this.URL}/movie/${id}/credits?language=es-ES`,{headers:this.header}).pipe(

      map(res=>res.cast),
        catchError(err=> of(null))
      )

  }

  loadPage(page: number):Observable<Movie[]>{
    return this.http.get<CarteleraResponse>(`${this.URL}/movie/now_playing?language=es-ES&page=1`, 
      {
        headers:this.header,
        params: {page: page.toString()}

      }).pipe(
        map(response => response.results)
      )
    
  }

  buscarPeliculas(texto: string): Observable<Movie[]>{
    return this.http.get<CarteleraResponse>(`${this.URL}/search/movie?query=${texto}&language=es-ES&page=1`, {headers:this.header}).pipe(
      map(res => res.results)
    )

  }



}
