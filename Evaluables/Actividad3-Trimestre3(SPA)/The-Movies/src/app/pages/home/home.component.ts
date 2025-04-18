import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/cartelera';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  movies: Movie[] =[]
  currentPage: number = 1

  constructor(private movieService: MovieService ){}

  ngOnInit(): void {
    this.loadsMovies()
  }

  loadsMovies(){
    this.movieService.getCartelera().subscribe(res =>{
      this.movies = res
    })
  }

  loadMoreMovies(page: number){
    this.movieService.loadPage(page).pipe(
      filter(movies => movies.length > 1)
    ).subscribe(movie => {
      this.currentPage = page;
      this.movies = movie
    })
  }

  loadPreviesMovie(){
    if (this.currentPage > 1) {
      this.currentPage--
      this.movieService.loadPage(this.currentPage).subscribe(movie => {
        this.movies = movie
      })
    }
  }

}
