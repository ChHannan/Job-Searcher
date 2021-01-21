import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllCompaniesPageComponent} from 'src/app/all-companies-page/all-companies-page.component';
import {CompanyBoxComponent} from 'src/app/all-companies-page/company-box/company-box.component';

import { CompaniesRoutingModule } from './companies-routing.module';


@NgModule({
  declarations: [
    AllCompaniesPageComponent,
    CompanyBoxComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
