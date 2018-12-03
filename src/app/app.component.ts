import { Component } from '@angular/core';
import { PageVisitGQL } from './shared/pagevisit-gql.service';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pageVisitGQL: PageVisitGQL) {
    this.pageVisitGQL.createPageVisit(null, null)
      .then(( resObservable ) => {
        resObservable.subscribe(({ data }) => {
          // 'data' contains the graphql response
        }, (error) => {
          console.log('there was an error sending the query: createPageVisit, ', error);
        });
      });
  }
}
