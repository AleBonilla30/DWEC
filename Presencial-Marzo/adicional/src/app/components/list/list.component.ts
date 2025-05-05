import { Component, Input } from '@angular/core';
import { Post } from '../../model/post';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() posts?: Post[] 

  constructor(private dataService: DataService){
    //this.posts = dataService.getAllPost()
    this.dataService.getAllPostUrl().subscribe((data) =>{
      this.posts = data.posts
    })
  }



}
