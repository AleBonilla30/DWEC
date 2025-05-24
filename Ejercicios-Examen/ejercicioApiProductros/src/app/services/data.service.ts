import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'https://dummyjson.com/products'
  api2 = 'https://dummyjson.com/products/categories'

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<any>  {
    return this.http.get(this.api)
  }

  public getProductByCategory(category: string): Observable<any> {
    return this.http.get(`${this.api}/category/${category}`)
  }

  public getAllProductByCategories(): Observable<any> {
    return this.http.get(this.api2)
  }
}
