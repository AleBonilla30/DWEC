import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../model/libros';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'https://stephen-king-api.onrender.com/api/books'

  constructor(private http: HttpClient) { }

  public getAllBocks():Observable<any> {
    return this.http.get(`${this.api}`)
  }
}
