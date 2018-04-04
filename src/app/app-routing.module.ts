import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { InteractiveResumeComponent } from './interactive-resume/interactive-resume.component';
import { PhpRedirectComponent } from 'app/php-redirect.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'about', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'home', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'interactive-resume', component: InteractiveResumeComponent },
  { path: 'php', component: PhpRedirectComponent },
  { path: 'php/:code', component: PhpRedirectComponent },
  { path: 'url', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'urls', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'url-shortener', component: UrlShortenerComponent },
];

@NgModule({
  declarations: [
    PhpRedirectComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
