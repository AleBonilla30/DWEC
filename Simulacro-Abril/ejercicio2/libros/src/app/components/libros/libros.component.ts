import { Component } from '@angular/core';
import { Books } from '../../model/books';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-libros',
  standalone: false,
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  books!:Books[]

  constructor(private dataService: DataService){
    this.dataService.getAllBooks().subscribe(book => {
      this.books = book.data
    })
  }


}
