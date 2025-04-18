import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper'
import { Movie } from '../../interfaces/cartelera';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-slideshow',
  standalone: false,
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  mySwiper?: Swiper
  @Input() movies?: Movie[]

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object){}
  

  ngOnInit(): void {
    console.log(this.movies);
  }

  ngAfterViewInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => { // Usamos setTimeout para que Swiper se inicie después de que Angular termine de renderizar
        this.mySwiper = new Swiper('.swiper', {
          loop: true
        });
      }, 0);
    }
  }

  onSlidePrev(){
    this.mySwiper?.slidePrev();
  }

  onSlideNext(){
    this.mySwiper?.slideNext();
  }

  onMovieCLick(movie:Movie){

    this.router.navigate(['/pelicula', movie.id])

  }



}
