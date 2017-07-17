import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LinkRepositoryService } from '../shared/link-repository.service';

@Component({
  moduleId: module.id,
  selector: 'ks-redirect',
  templateUrl: 'redirect.component.html',
  styleUrls: ['redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  // Get long URL and then redirect
  getRedirectLinkHttp(code: string) {
    this.linkRepository.getRedirectLink(code).subscribe(
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

  constructor(private linkRepository: LinkRepositoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let code = this.route.snapshot.paramMap.get('code');
    this.getRedirectLinkHttp(code);
  } // ngOnInit
} // RedirectComponent
