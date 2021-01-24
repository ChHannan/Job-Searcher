import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobDetailPageComponent} from 'src/app/job-detail-page/job-detail-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import {JobDetailRoutingModule} from './job-detail-routing.module';


@NgModule({
  declarations: [
    JobDetailPageComponent
  ],
  imports: [
    CommonModule,
    JobDetailRoutingModule,
    SharedModule
  ]
})
export class JobDetailModule {
}
