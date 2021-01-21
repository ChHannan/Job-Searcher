import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateProfileRoutingModule } from './candidate-profile-routing.module';
import {CandidateProfilePageComponent} from '../candidate-profile-page/candidate-profile-page.component';


@NgModule({
  declarations: [
    CandidateProfilePageComponent
  ],
  imports: [
    CommonModule,
    CandidateProfileRoutingModule
  ]
})
export class CandidateProfileModule { }
