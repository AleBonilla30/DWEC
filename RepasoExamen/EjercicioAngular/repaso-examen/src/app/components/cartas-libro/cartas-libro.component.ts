import { Component } from '@angular/core';
import { Libros } from '../../model/libros';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cartas-libro',
  standalone: false,
  templateUrl: './cartas-libro.component.html',
  styleUrl: './cartas-libro.component.css'
})
export class CartasLibroComponent {
  libros!: Libros[]

  constructor(private dataService: DataService) {
    dataService.getAllBocks().subscribe(bocks => {
      this.libros = bocks.data
    })
  }

}
