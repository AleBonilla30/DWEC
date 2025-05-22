import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api1 = 'https://dummyjson.com/products'

  api = 'https://dummyjson.com/products/categories'

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<any>{
    return this.http.get(this.api)
  }

  public getProductsByCategory(categories: string): Observable<any>{
    return this.http.get(`${this.api1}/category/${categories}`)

  }
}
