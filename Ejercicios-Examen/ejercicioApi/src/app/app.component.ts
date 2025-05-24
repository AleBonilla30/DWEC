import { Component } from '@angular/core';
import { Books } from './models/books';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioApi';
  books!: Books[]

  constructor(private dataService: DataService){
    this.dataService.getAllBooks().subscribe((response)=> {
      this.books = response.data
    })
  }
}
