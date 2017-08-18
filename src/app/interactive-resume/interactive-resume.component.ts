import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'ks-interactive-resume',
  templateUrl: 'interactive-resume.component.html',
  styleUrls: ['interactive-resume.component.scss']
})
export class InteractiveResumeComponent implements OnInit {

  private apiUrl = "https://api.kellenschmidt.com";
  public currentDate = new Date();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post(`${this.apiUrl}/page-visit`,
    {
      "site": document.domain,
      "referrer": document.referrer
    })
    .retry(1)
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
