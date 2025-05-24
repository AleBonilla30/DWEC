import { Component } from '@angular/core';
import { Categories, Productos } from '../../models/productos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filtros2',
  standalone: false,
  templateUrl: './filtros2.component.html',
  styleUrl: './filtros2.component.css'
})
export class Filtros2Component {
  productos!: Productos[]
  selectCategories: string = ""

  categories!: Categories[]

  constructor(private dataService: DataService){
    this.dataService.getAllProductByCategories().subscribe((response)=> {
      this.categories = response
    })
  }

  getProductsByCategories(){
    this.dataService.getProductByCategory(this.selectCategories).subscribe((response)=> {
      this.productos = response.products
    })
  }

}
