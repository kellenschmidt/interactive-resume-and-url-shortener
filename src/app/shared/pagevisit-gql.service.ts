import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class PageVisitGQL {
  mutation = gql`
    mutation createPageVisit($userId: Int, $path: String!, $referrer: String, $ipAddress: String!) {
      createPageVisit(userId: $userId, path: $path, referrer: $referrer, ipAddress: $ipAddress) {
        _id
      }
    }
  `;

  constructor(private apollo: Apollo, private location: Location, private http: HttpClient) { }

  async createPageVisit(userId: number, path: string) {
    var ipData: IpData = await this.http.get<IpData>('https://api.ipify.org?format=json').toPromise();
    var ipAddress: string = ipData.ip;

    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        userId: userId,
        path: path || this.location.path(),
        referrer: document.referrer,
        ipAddress: ipAddress
      }
    });
  }
}

interface IpData {
  ip: string,
}
