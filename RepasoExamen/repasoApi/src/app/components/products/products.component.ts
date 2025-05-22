import { Component } from '@angular/core';
import { Categories, Products } from '../../models/Product';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos!: Products[]
  categiesSelect: string = ''
  categories!: Categories[]

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.dataService.getAllProducts().subscribe((data)=>{
      this.categories = data
    })
  }

  getProductsCategory(){
    this.dataService.getProductsByCategory(this.categiesSelect).subscribe((data)=>{
      this.productos = data.products
      console.log(this.productos);
      
    })
  }

}
