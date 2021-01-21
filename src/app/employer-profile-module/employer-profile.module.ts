import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerProfileRoutingModule } from './employer-profile-routing.module';
import {EmployerProfilePageComponent} from '../employer-profile-page/employer-profile-page.component';


@NgModule({
  declarations: [
    EmployerProfilePageComponent
  ],
  imports: [
    CommonModule,
    EmployerProfileRoutingModule
  ]
})
export class EmployerProfileModule { }
