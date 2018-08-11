import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class PageVisitService {
  mutation = gql`
    mutation addPageVisit($path: String!, $referrer: String) {
      addPageVisit(path: $path, referrer: $referrer) {
        id
      }
    }
  `;

  constructor(private apollo: Apollo, private location: Location) { }

  addPageVisit() {
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        path: this.location.path(),
        referrer: document.referrer,
      }
    });
  }
}
