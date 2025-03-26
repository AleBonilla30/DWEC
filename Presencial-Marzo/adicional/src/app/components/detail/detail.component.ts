import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  post!: Post


  constructor(private routes: ActivatedRoute, private dataService: DataService){

    //suscribirse a los parametros para obtener el id
    this.routes.params.subscribe(params => {
      const id = Number(params['id'])//obtiene el id de la url
      if (id) {

        //llego al servicio para obtener al post con ese id
        this.dataService.getPostById(id).subscribe(post =>{
          this.post = post //asigno el pos al componente 
        })   
      }
      
    })
  }//para coger el id de cada post
  
}
