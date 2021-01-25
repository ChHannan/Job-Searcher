import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { CreateCompanyRoutingModule } from './create-company-routing.module';
import {CreateCompanyPageComponent} from '../create-company-page/create-company-page.component';


@NgModule({
  declarations: [
    CreateCompanyPageComponent
  ],
    imports: [
        CommonModule,
        CreateCompanyRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CreateCompanyModule { }
