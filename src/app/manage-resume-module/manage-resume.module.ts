import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResumeBoxComponent} from 'src/app/manage-resume-page/resume-box/resume-box.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { ManageResumeRoutingModule } from './manage-resume-routing.module';
import {ManageResumePageComponent} from '../manage-resume-page/manage-resume-page.component';


@NgModule({
  declarations: [
    ManageResumePageComponent,
    ResumeBoxComponent,
  ],
    imports: [
        CommonModule,
        ManageResumeRoutingModule,
        SharedModule
    ]
})
export class ManageResumeModule { }
