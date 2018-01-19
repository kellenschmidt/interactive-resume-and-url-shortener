import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class ContentRepositoryService {

  private apiUrl = environment.apiUrl;
  
  // Get projects or work experience cards
  getCards(cardType: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cards/${cardType}`)
    .retry(1)
  }

  // Create new short URL
  getChips(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chips`)
    .retry(1)
  }

  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`)
    .retry(1)
  }

  constructor(private http: HttpClient) {
  }

}
