import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
  standalone: false
})
export class PosterPipe implements PipeTransform {

  /* https://image.tmdb.org/t/p/w500/{{movie.poster_path}} */

  transform(poster: string, ...args: unknown[]): string {
    
    if (poster) {
      return `https://image.tmdb.org/t/p/w500/${poster}`
    }else{
      return '../assets/noImage.png'
    }
  }

}
