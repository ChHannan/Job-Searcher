import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResumeBoxComponent} from 'src/app/manage-resume-page/resume-box/resume-box.component';

import { ManageResumeRoutingModule } from './manage-resume-routing.module';
import {ManageResumePageComponent} from '../manage-resume-page/manage-resume-page.component';


@NgModule({
  declarations: [
    ManageResumePageComponent,
    ResumeBoxComponent,
  ],
  imports: [
    CommonModule,
    ManageResumeRoutingModule
  ]
})
export class ManageResumeModule { }
