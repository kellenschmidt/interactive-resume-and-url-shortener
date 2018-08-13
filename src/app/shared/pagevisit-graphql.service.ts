import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class PageVisitService {
  mutation = gql`
    mutation addPageVisit($path: String!, $referrer: String, $ipAddress: String!) {
      addPageVisit(path: $path, referrer: $referrer, ipAddress: $ipAddress) {
        id
      }
    }
  `;

  constructor(private apollo: Apollo, private location: Location, private http: HttpClient) { }

  async addPageVisit() {
    var ipData: IpData = await this.http.get<IpData>('https://api.ipify.org?format=json').toPromise();
    var ipAddress: string = ipData.ip;

    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        path: this.location.path(),
        referrer: document.referrer,
        ipAddress: ipAddress
      }
    });
  }
}

interface IpData {
  ip: string,
}
