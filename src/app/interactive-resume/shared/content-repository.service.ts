import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlVariablesService } from '../../shared/url-variables.service';

@Injectable()
export class ContentRepositoryService {

  private apiUrl = this.urlVars.apiUrl;
  
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

  constructor(private http: HttpClient,
    private urlVars: UrlVariablesService) {
  }

}
