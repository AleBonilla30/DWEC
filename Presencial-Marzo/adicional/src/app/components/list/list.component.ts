import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  posts?: Post[] // el ? es que lo tendra el valor 

  constructor(private dataService: DataService){
    this.posts = dataService.getAllPost()
  }



}
