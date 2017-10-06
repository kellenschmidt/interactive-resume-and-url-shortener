import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';

import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './url-shortener/redirect/redirect.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'about', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'home', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'interactive-resume', loadChildren: 'app/interactive-resume/interactive-resume.module#InteractiveResumeModule' },
  { path: 'url', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'urls', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'url-shortener', loadChildren: 'app/url-shortener/url-shortener.module#UrlShortenerModule' },
  { path: 'url-shortener/:code', loadChildren: 'app/url-shortener/url-shortener.module#UrlShortenerModule' },
  { path: ':code', redirectTo: 'url-shortener/:code', pathMatch: 'full'},
];

@NgModule({
  imports: [
   RouterModule.forRoot(
     appRoutes,
     {
        // enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules,
      }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }