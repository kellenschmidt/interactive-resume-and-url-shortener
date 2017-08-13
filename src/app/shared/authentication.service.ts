import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LinkData } from './link-data';
import 'rxjs/add/operator/retry';
import { User } from './user';
import { AuthenticationData } from './authentication-data';

@Injectable()
export class AuthenticationService {

  private apiUrl = "https://api.kellenschmidt.com";

  currentUser: User = new User(undefined, "" ,"", undefined, "", undefined, undefined, false);

  // Register for a new account
  register(email: string, name: string, phone: number, password: string): Observable<AuthenticationData> {
    return this.http.post<AuthenticationData>(`${this.apiUrl}/urlshortener/register`,
    {
      "email": email,
      "name": name,
      "phone": phone,
      "password": password
    })
    .retry(1)
  }

  // Login to an existing account
  login(email: string, password: string): Observable<AuthenticationData> {
    return this.http.post<AuthenticationData>(`${this.apiUrl}/urlshortener/login`,
    {
      "email": email,
      "password": password
    })
    .retry(1)
  }

  // Logout of an existing account
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/urlshortener/logout`,
    {
      // Empty request body
    },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
    .retry(1)
  }

  // Authenticate an existing JWT
  authenticate(): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/urlshortener/authenticate`,
    {
      // Empty request body
    },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
    .retry(1)
  }

  // Get JWT or return falsey if jwt doesn't exist
  getJwt() {
    if(localStorage.getItem('auth') == null) {
      return "";
    } else {
      var storedAuth: AuthenticationData = JSON.parse(localStorage.getItem('auth'));
      return storedAuth.token;
    }
  }

  getUser() {
    if(localStorage.getItem('auth') == null) {
      return "";
    } else {
      var storedAuth: AuthenticationData = JSON.parse(localStorage.getItem('auth'));
      return storedAuth.user;
    }
  }

  authenticateUser() {
    this.authenticate().subscribe(
      (responseBody) => {
        // If user is authenticated then populate user data
        if(responseBody === true) {
          this.currentUser.initializeUser(this.getUser());
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to authenticate failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //authenticateUser

  constructor(private http: HttpClient) {
    this.authenticateUser();
  }

}
