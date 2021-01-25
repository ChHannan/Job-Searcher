import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { ApplyJobRoutingModule } from './apply-job-routing.module';
import {ApplyJobPageComponent} from '../apply-job-page/apply-job-page.component';


@NgModule({
  declarations: [
    ApplyJobPageComponent
  ],
  imports: [
    CommonModule,
    ApplyJobRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ApplyJobModule { }
