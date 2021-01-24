import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageResumePageComponent} from '../manage-resume-page/manage-resume-page.component';

const routes: Routes = [
  {
    path: '', component: ManageResumePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageResumeRoutingModule { }
