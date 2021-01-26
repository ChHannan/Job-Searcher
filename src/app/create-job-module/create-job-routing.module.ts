import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateJobComponent} from 'src/app/create-job-page/create-job.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'create'
  },
  {
    path: 'create', component: CreateJobComponent
  },
  {
    path: 'edit/:id', component: CreateJobComponent, data: {edit: true}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateJobRoutingModule { }
