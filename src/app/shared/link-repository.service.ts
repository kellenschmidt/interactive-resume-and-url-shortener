import { Injectable } from '@angular/core';
import { LinkData } from './link-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';


@Injectable()
export class LinkRepositoryService {

  private apiUrl = "https://api.kellenschmidt.com";

  // Create new short URL
  addLink(longUrl: string): Observable<LinkData> {
    return this.http.post<LinkData>(`${this.apiUrl}/url`,
    {
      "long_url": longUrl
    },
    {
      headers: new HttpHeaders().set('Authentication', localStorage.getItem('jwt')),
    })
    .retry(3)
  }

  // Hide short URL from table
  hideLink(code: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/url`,
    {
      "code": code
    },
    {
      headers: new HttpHeaders().set('Authentication', localStorage.getItem('jwt')),
    })
    .retry(3)
  }

  // Get all short URLs
  getLinks(): Observable<LinkDataResponse> {
    return this.http.get<LinkDataResponse>(`${this.apiUrl}/urls`,
    {
      headers: new HttpHeaders().set('Authentication', localStorage.getItem('jwt')),
    })
    // Retry this request up to 3 times.
    .retry(3)
  }

  // Get long URL and increment click count
  getRedirectLink(code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/hit/${code}`,
    { 
      // Empty request body
    })
    .retry(3)
  }

  constructor(private http: HttpClient) { }

}

interface LinkDataResponse {
    data: LinkData[];
}