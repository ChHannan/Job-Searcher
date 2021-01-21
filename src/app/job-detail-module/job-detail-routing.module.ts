import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobDetailPageComponent} from '../job-detail-page/job-detail-page.component';

const routes: Routes = [
  {
    path: '', component: JobDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDetailRoutingModule { }
