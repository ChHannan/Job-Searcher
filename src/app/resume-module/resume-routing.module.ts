import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResumePageComponent} from 'src/app/resume-page/resume-page.component';


const routes: Routes = [
  {
    path: '', component: ResumePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule {
}
