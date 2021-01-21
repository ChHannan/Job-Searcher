import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateJobComponent} from 'src/app/create-job-page/create-job.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { CreateJobRoutingModule } from './create-job-routing.module';


@NgModule({
  declarations: [
    CreateJobComponent
  ],
  imports: [
    CommonModule,
    CreateJobRoutingModule,
    SharedModule
  ]
})
export class CreateJobModule { }
