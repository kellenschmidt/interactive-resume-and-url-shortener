import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LinkData } from './link-data';
import 'rxjs/add/operator/retry';

@Injectable()
export class AuthenticationService {

  private apiUrl = "https://api.kellenschmidt.com";

  // Register for a new account
  register(email: string, name: string, phone: number, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/urlshortener/register`,
    {
      "email": email,
      "name": name,
      "phone": phone,
      "password": password
    })
    .retry(3)
  }

  // Login to an existing account
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/urlshortener/login`,
    {
      "email": email,
      "password": password
    })
    .retry(3)
  }

  // Logout of an existing account
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/urlshortener/logout`,
    {
      // Empty request body
    },
    {
      headers: new HttpHeaders().set('Authentication', localStorage.getItem('jwt')),
    }
  )
    .retry(3)
  }

  constructor(private http: HttpClient) { }

}
