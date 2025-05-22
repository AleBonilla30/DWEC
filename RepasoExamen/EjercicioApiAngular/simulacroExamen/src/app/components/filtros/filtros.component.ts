import { Component } from '@angular/core';
import { CategorieURL, Products } from '../../model/producto';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filtros',
  standalone: false,
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css',
})
export class FiltrosComponent {
  productos!: Products[];
  categories!: CategorieURL[]

  categoriaSelectFija: string = '';
  categoriaSelectDinamica: string = '';
  

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.onCategoriesChange()
  }
  
  onCategoriesChange(){
    this.dataService.getAllCategorie().subscribe((data)=> {
      this.categories = data
      console.log(this.categories);
      
    })
  }

  getCategories() {
    this.dataService
      .getProductsByCategory(this.categoriaSelectFija)
      .subscribe((categorie) => {
        this.productos = categorie.products
        console.log(this.productos);
        
      });
  }

  getCategoriesDinamico(){
    this.dataService.getProductsByCategory(this.categoriaSelectDinamica).subscribe((data)=> {
      this.productos = data.products
    })
  }
}
