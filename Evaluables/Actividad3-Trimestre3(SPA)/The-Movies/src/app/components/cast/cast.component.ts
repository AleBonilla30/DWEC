import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/credits';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast',
  standalone: false,
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.css'
})
export class CastComponent implements AfterViewInit {
 
  @Input() cast?:Cast[];

  /* afterViewInit Se usa para ejecutar código después de que la vista del componente ha sido inicializada. */
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper',{
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween:15
    })
  
  }


}
