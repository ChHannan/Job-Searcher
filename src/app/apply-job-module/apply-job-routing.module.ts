import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplyJobPageComponent} from '../apply-job-page/apply-job-page.component';

const routes: Routes = [
  {
    path: '', component: ApplyJobPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyJobRoutingModule { }
