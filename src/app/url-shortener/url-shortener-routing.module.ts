import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UrlShortenerComponent } from './url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';

const urlShortenerRoutes: Routes = [
  { path: 'urlshortener',
    component: UrlShortenerComponent,
    children: [
        {
            path: ':code',
            component: RedirectComponent,
        },
        {
            path: 'null',
            component: UrlShortenerComponent,
        },
    ],
    
  },
  { 
    path: 'url',
    redirectTo: '/urlshortener',
    pathMatch: 'full'
  },
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