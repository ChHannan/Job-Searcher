import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeRoutingModule} from 'src/app/resume-module/resume-routing.module';
import {ResumePageComponent} from 'src/app/resume-page/resume-page.component';

import {SharedModule} from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    ResumePageComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule
  ]
})
export class ResumeModule {
}
