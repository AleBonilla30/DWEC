import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos!: Productos[]

  constructor(private dataService: DataService){
    this.dataService.getAllProducts().subscribe((response)=> {
      this.productos = response.products
    })
  }

}
