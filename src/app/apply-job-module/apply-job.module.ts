import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyJobRoutingModule } from './apply-job-routing.module';
import {ApplyJobPageComponent} from '../apply-job-page/apply-job-page.component';


@NgModule({
  declarations: [
    ApplyJobPageComponent
  ],
  imports: [
    CommonModule,
    ApplyJobRoutingModule
  ]
})
export class ApplyJobModule { }
