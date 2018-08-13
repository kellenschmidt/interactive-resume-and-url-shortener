import { Component } from '@angular/core';
import { PageVisitService } from './shared/pagevisit-graphql.service';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pageVisitService: PageVisitService) {
    this.pageVisitService.addPageVisit()
      .then(( resObservable ) => {
        resObservable.subscribe(({ data }) => {
          // 'data' contains the graphql response
        }, (error) => {
          console.log('there was an error sending the query: addPageVisit, ', error);
        });
      });
  }
}
