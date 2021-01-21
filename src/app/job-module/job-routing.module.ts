import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateJobComponent} from '../create-job/create-job.component';

const routes: Routes = [
  {
    path: '', component: CreateJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
