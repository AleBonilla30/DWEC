import { Component } from '@angular/core';
import { Libros } from '../../model/libros';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-libros',
  standalone: false,
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {

  libros!: Libros[] 

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getAllBocks().subscribe(books => {
      this.libros = books.data

      console.log(this.libros);
      
    })
    
  }

}
