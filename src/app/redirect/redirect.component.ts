import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'ks-redirect',
  templateUrl: 'redirect.component.html',
  styleUrls: ['redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  apiUrl: string = "https://api.kellenschmidt.com";

  // Make POST request to get long URL and then redirect
  postRequest(code: string) {
    this.http.post(`${this.apiUrl}/hit/${code}`, { /* empty request body */ })
    .subscribe(
      (responseBody) => {
        // Redirect to new URL
        window.location.href = responseBody["long_url"];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: PUT request for long URL failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let code = this.route.snapshot.paramMap.get('code');
    this.postRequest(code);
  } // ngOnInit
} // RedirectComponent
