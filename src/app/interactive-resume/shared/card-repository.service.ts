import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardRepositoryService {

  private apiUrl = "https://api.kellenschmidt.com";
  
  // Create new short URL
  getCards(cardType: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards/${cardType}`)
    .retry(1)
  }

  constructor(private http: HttpClient) {
  }

}
