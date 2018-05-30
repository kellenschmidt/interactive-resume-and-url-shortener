import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContentRepositoryService {

  private apiUrl = environment.apiUrl;
  
  // Get projects or work experience cards
  getCards(cardType: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cards/${cardType}`)
  }

  // Create new short URL
  getChips(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chips`)
  }

  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`)
  }

  constructor(private http: HttpClient) {
  }

}
