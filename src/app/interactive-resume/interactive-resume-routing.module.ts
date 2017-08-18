import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { InteractiveResumeComponent } from './interactive-resume.component';

const interactiveResumeRoutes: Routes = [
  { path: '',
    component: InteractiveResumeComponent,
    children: [],
  },
];

@NgModule({
  imports: [
   RouterModule.forChild(interactiveResumeRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class InteractiveResumeRoutingModule { }