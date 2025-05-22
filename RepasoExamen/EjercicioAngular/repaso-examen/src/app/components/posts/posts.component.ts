import { Component } from '@angular/core';
import { Post } from '../../model/posts';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts!: Post[]
  seleccionTags: string = ''
  constructor(private postService: PostService){}


  getTags(){
    this.postService.getPostByTags(this.seleccionTags).subscribe((response) => {
      this.posts = response.posts
      console.log(this.seleccionTags);
      
    })

  }



}
