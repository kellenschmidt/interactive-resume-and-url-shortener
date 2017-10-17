import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './url-shortener/redirect/redirect.component';

const appRoutes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: 'null', component: UrlShortenerComponent },
  { path: ':code', component: RedirectComponent }
];

@NgModule({
  imports: [
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }