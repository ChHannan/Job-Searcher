import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageResumeRoutingModule } from './manage-resume-routing.module';
import {ManageResumePageComponent} from '../manage-resume-page/manage-resume-page.component';


@NgModule({
  declarations: [
    ManageResumePageComponent
  ],
  imports: [
    CommonModule,
    ManageResumeRoutingModule
  ]
})
export class ManageResumeModule { }
