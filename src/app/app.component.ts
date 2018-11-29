import { Component, OnInit } from '@angular/core';
import { PageVisitGQL } from './shared/pagevisit-gql.service';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isIE: boolean = false;

  constructor(private pageVisitGQL: PageVisitGQL) {
    this.pageVisitGQL.createPageVisit()
      .then(( resObservable ) => {
        resObservable.subscribe(({ data }) => {
          // 'data' contains the graphql response
        }, (error) => {
          console.log('there was an error sending the query: createPageVisit, ', error);
        });
      });
  }

  ngOnInit() {
    // Identify if browser is Internet Explorer 6-11
    this.isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
  }
}
