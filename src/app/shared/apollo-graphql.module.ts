import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { UrlVariablesService } from './url-variables.service';

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
})
export class ApolloGraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink, private urlVars: UrlVariablesService) {
    apollo.create({
      link: httpLink.create({ uri: `${this.urlVars.apiv2Url}/graphql` }),
      cache: new InMemoryCache()
    });
  }
}
