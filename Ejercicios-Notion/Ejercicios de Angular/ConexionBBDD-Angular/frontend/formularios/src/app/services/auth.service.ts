import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any>{
      return this.http.post(`${this.apiUrl}/register`, user)
  }
  login(user:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, user)
  }
}
