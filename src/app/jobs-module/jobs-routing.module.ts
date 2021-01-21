import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllJobsPageComponent} from 'src/app/all-jobs-page/all-jobs-page.component';

const routes: Routes = [
  {
    path: '', component: AllJobsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
