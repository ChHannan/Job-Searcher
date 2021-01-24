import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared-module/shared.module';
import {AllJobsPageComponent} from '../all-jobs-page/all-jobs-page.component';

import {JobsRoutingModule} from './jobs-routing.module';


@NgModule({
  declarations: [
    AllJobsPageComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule {
}
