import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UrlShortenerComponent } from './url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';

const urlShortenerRoutes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: ':code', component: RedirectComponent },
];

@NgModule({
  imports: [
   RouterModule.forChild(urlShortenerRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class UrlShortenerRoutingModule { }
