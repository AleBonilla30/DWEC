import { Component, Input } from '@angular/core';
import { Post } from '../../model/post';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  posts?: Post[] 

seleccionTag: string = '';
constructor(private dataService: DataService){}

selecionFiltro(){
  this.dataService.getPostByTag(this.seleccionTag).subscribe(tags => {
    console.log(tags.posts);
    this.posts = tags.posts
  })
}

}
