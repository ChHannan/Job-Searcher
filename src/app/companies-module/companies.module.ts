import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AllCompaniesPageComponent} from 'src/app/all-companies-page/all-companies-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import {CompaniesRoutingModule} from './companies-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AllCompaniesPageComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule {
}
