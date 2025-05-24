import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filtros1',
  standalone: false,
  templateUrl: './filtros1.component.html',
  styleUrl: './filtros1.component.css'
})
export class Filtros1Component {
  productos!: Productos[]
  selectProduct: string = ""

  constructor(private dataService: DataService){}

  getProducts(){
    this.dataService.getProductByCategory(this.selectProduct).subscribe((response)=> {
      this.productos = response.products
    })
  }

}
