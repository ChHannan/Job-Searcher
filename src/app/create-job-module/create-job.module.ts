import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateJobComponent} from 'src/app/create-job-page/create-job.component';

import { CreateJobRoutingModule } from './create-job-routing.module';


@NgModule({
  declarations: [
    CreateJobComponent
  ],
  imports: [
    CommonModule,
    CreateJobRoutingModule
  ]
})
export class CreateJobModule { }
