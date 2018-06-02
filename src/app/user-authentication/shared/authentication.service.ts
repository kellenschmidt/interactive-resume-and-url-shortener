import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkData } from '../../url-shortener/shared/link-data';
import { TableHandlerService } from '../../url-shortener/shared/table-handler.service';
import { User } from './user';
import { AuthenticationData } from './authentication-data';
import { retry } from 'rxjs/operators';
import { UrlVariablesService } from '../../shared/url-variables.service';

@Injectable()
export class AuthenticationService {

  private apiUrl = this.urlVars.apiUrl;

  currentUser: User = new User(undefined, "", "", undefined, "", undefined, undefined, false, false);

  // Register for a new account
  register(email: string, name: string, phone: number, password: string): Observable<AuthenticationData> {
    return this.http.post<AuthenticationData>(`${this.apiUrl}/register`,
    {
      "email": email,
      "name": name,
      "phone": phone,
      "password": password
    })
  }

  // Login to an existing account
  login(email: string, password: string): Observable<AuthenticationData> {
    return this.http.post<AuthenticationData>(`${this.apiUrl}/login`,
    {
      "email": email,
      "password": password
    })
  }

  // Authenticate an existing JWT
  authenticate(): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/authenticate`,
    {
      // Empty request body
    },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
  }

  logout() {
    // Reset currentUser
    this.currentUser.reset();

    // Remove authentication from local storage
    localStorage.removeItem('auth');
    
    this.refreshTable();
  }

  refreshTable() {
    // Resend http request to refresh links in table
    this.tableHandler.getLinks();
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

  authenticateHttp() {
    this.authenticate().subscribe(
      (responseBody) => {
        // If user is authenticated then populate user data
        if(responseBody['authenticated'] === true) {
          this.currentUser.initializeUser(this.getUser());
        } else {
          this.logout();
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
  } // authenticateUser

  constructor(private http: HttpClient,
    private tableHandler: TableHandlerService,
    private urlVars: UrlVariablesService) {
    this.authenticateHttp();
  }

}
