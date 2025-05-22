import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Products } from '../../model/producto';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products!: Products[]

  constructor(private dataService: DataService){
    this.dataService.getAllProducts().subscribe(response =>{
      this.products = response.products
      console.log(this.products);
      
    })
  }


}
