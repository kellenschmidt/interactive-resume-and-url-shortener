import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { UrlVariablesService } from '../shared/url-variables.service';

@Component({
  selector: 'ks-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  private apiUrl = this.urlVars.apiUrl;
  public currentDate = new Date();

  constructor(private http: HttpClient,
    private titleService: Title,
    private urlVars: UrlVariablesService) { }

  ngOnInit() {
    this.titleService.setTitle("URL Shortener  |  Kellen Schmidt");

    this.http.post(`${this.apiUrl}/page-visit`,
    {
      "site": document.domain,
      "referrer": document.referrer
    })
    .subscribe(
      (responseBody) => {
        // Do nothing on success
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to log page visit failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } // http post
}
