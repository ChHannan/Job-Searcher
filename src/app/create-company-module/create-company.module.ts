import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCompanyRoutingModule } from './create-company-routing.module';
import {CreateCompanyPageComponent} from '../create-company-page/create-company-page.component';


@NgModule({
  declarations: [
    CreateCompanyPageComponent
  ],
  imports: [
    CommonModule,
    CreateCompanyRoutingModule
  ]
})
export class CreateCompanyModule { }
