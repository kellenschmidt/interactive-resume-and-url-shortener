import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import { LinkData } from '../link-data';

@Component({
  moduleId: module.id,
  selector: 'ks-link-table',
  templateUrl: 'link-table.component.html',
  styleUrls: ['link-table.component.scss']
})
export class LinkTableComponent implements OnInit {

  siteUrl: string = "https://kellenschmidt.com/";
  apiUrl: string = "https://api.kellenschmidt.com";
  linkRows: LinkData[] = [];

  // Copy short URL to clipboard
  copy(code: string) {
    let textToCopy = "https://kellenschmidt.com/" + code;
    
    // Temporarily create invisible element on screen to copy text from
    let selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = textToCopy;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get<LinkDataResponse>(`${this.apiUrl}/urls`)
    // Retry this request up to 3 times.
    .retry(3)
    // Any errors after the 3rd retry will fall through to the app.
    .subscribe(
      (responseBody) => {
        // Read the result field from the JSON response
        this.linkRows = responseBody.data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for LinkDataResponse failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } // OnInit
}// LinkTableComponent

interface LinkDataResponse {
    data: LinkData[];
}


