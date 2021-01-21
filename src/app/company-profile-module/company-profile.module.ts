import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyProfilePageComponent} from 'src/app/company-profile-page/company-profile-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';


@NgModule({
  declarations: [
    CompanyProfilePageComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    SharedModule,
  ]
})
export class CompanyProfileModule { }
