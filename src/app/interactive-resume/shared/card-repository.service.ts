import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardRepositoryService {

  private apiUrl = "https://api.kellenschmidt.com";
  
  // Create new short URL
  getCards(cardType: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/cards/${cardType}`)
    .retry(1)
  }

  constructor(private http: HttpClient) { }

}
