import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { UrlVariablesService } from '../shared/url-variables.service';

@Component({
  selector: 'ks-interactive-resume',
  templateUrl: './interactive-resume.component.html',
  styleUrls: ['./interactive-resume.component.scss']
})
export class InteractiveResumeComponent implements OnInit {

  private apiUrl: string = this.urlVars.apiUrl;
  public currentDate: Date = new Date();
  public iOSSafari: boolean = false;

  constructor(private http: HttpClient,
    private titleService: Title,
    private urlVars: UrlVariablesService) { }

  ngOnInit() {
    this.titleService.setTitle("Interactive Resume  |  Kellen Schmidt");

    // Determine if browser is iOS Safari
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPhone|iPad|iPod/i);
    var webkit = !!ua.match(/WebKit/i);
    this.iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

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
