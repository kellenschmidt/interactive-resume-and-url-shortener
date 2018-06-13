import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkData, LinkDataResponse } from './link-data';
import { AuthenticationData } from '../../user-authentication/shared/authentication-data';
import { retry } from 'rxjs/operators';
import { UrlVariablesService } from '../../shared/url-variables.service';

@Injectable()
export class LinkRepositoryService {

  private apiUrl = this.urlVars.apiUrl;

  // Create new short URL
  addLink(longUrl: string): Observable<LinkData> {
    return this.http.post<LinkData>(`${this.apiUrl}/url`,
    {
      "long_url": longUrl
    },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
  }

  // Hide short URL from table
  hideLink(code: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/url`,
    {
      "code": code
    },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
  }

  // Get all short URLs
  getLinks(): Observable<LinkDataResponse> {
    return this.http.get<LinkDataResponse>(`${this.apiUrl}/urls`,
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
  }

  // Get long URL and increment click count
  getRedirectLink(code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/hit/${code}`,
    { 
      // Empty request body
    })
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

  constructor(private http: HttpClient,
    private urlVars: UrlVariablesService) { }

}
