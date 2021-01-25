import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { CandidateProfileRoutingModule } from './candidate-profile-routing.module';
import {CandidateProfilePageComponent} from '../candidate-profile-page/candidate-profile-page.component';


@NgModule({
  declarations: [
    CandidateProfilePageComponent
  ],
    imports: [
        CommonModule,
        CandidateProfileRoutingModule,
        SharedModule
    ]
})
export class CandidateProfileModule { }
