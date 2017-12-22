import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'about', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'home', redirectTo: 'interactive-resume', pathMatch: 'full' },
  { path: 'interactive-resume', loadChildren: 'app/interactive-resume/interactive-resume.module#InteractiveResumeModule' },
  { path: 'url', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'urls', redirectTo: 'url-shortener', pathMatch: 'full' },
  { path: 'url-shortener', loadChildren: 'app/url-shortener/url-shortener.module#UrlShortenerModule' },
];

@NgModule({
  declarations: [],
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
