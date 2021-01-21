import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateJobComponent} from 'src/app/create-job-page/create-job.component';

import { JobRoutingModule } from './job-routing.module';


@NgModule({
  declarations: [
    CreateJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
