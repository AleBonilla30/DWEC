import { Component } from '@angular/core';
import { PublicidadComponent } from '../childs/publicidad/publicidad.component';
import { ListaDeProductosComponent } from '../childs/lista-de-productos/lista-de-productos.component';

@Component({
  selector: 'app-incremental-hidration',
  standalone:true,
  imports: [PublicidadComponent,ListaDeProductosComponent],
  templateUrl: './incremental-hidration.component.html',
  styleUrl: './incremental-hidration.component.css'
})
export class IncrementalHidrationComponent {
  agregarAlCarrito(){
    console.log("producto agregado");
    
  }

}
