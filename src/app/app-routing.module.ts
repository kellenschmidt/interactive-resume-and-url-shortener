import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';
import { PhpRedirectComponent } from 'app/php-redirect.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'about', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'home', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'interactive-resume', loadChildren: 'app/interactive-resume/interactive-resume.module#InteractiveResumeModule' },
  { path: 'php', component: PhpRedirectComponent },
  { path: 'php/:code', component: PhpRedirectComponent },
  { path: 'url', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'urls', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'url-shortener', loadChildren: 'app/url-shortener/url-shortener.module#UrlShortenerModule' },
];

@NgModule({
  declarations: [
    PhpRedirectComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
      }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
