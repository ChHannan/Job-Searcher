import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobBoxComponent} from 'src/app/all-jobs-page/job-box/job-box.component';

import {JobsRoutingModule} from './jobs-routing.module';
import {AllJobsPageComponent} from '../all-jobs-page/all-jobs-page.component';


@NgModule({
  declarations: [
    AllJobsPageComponent,
    JobBoxComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule {
}
