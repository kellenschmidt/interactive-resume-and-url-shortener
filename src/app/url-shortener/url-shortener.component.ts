import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotFoundDialogComponent } from './not-found-dialog/not-found-dialog.component';

@Component({
  moduleId: module.id,
  selector: 'ks-url-shortener',
  templateUrl: 'url-shortener.component.html',
  styleUrls: ['url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  private apiUrl = "https://api.kellenschmidt.com";
  public currentDate = new Date();

  constructor(private router: Router,
              private dialog: MdDialog,
              private http: HttpClient) { }

  ngOnInit() {
    if(this.router.url === "/null") {
      this.dialog.open(NotFoundDialogComponent);
    } else {
      this.http.post(`${this.apiUrl}/page-visit`,
      {
        "site": document.domain,
        "referrer": document.referrer
      })
      .retry(3)
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
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        } // error
      ) // http subscribe
    } // http post
  } // else

}
