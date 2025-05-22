import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://dummyjson.com/posts'

  constructor(private http: HttpClient){}


  public getPostByTags(tags: string): Observable<any>{
    return this.http.get(`${this.url}/tag/${tags}`)
  }
}
