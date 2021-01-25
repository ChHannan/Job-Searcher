import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerProfileRoutingModule } from './employer-profile-routing.module';
import {EmployerProfilePageComponent} from '../employer-profile-page/employer-profile-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployerProfilePageComponent
  ],
    imports: [
        CommonModule,
        EmployerProfileRoutingModule,
        ReactiveFormsModule
    ]
})
export class EmployerProfileModule { }
