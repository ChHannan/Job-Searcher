import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidateProfilePageComponent} from '../candidate-profile-page/candidate-profile-page.component';

const routes: Routes = [
  {
    path: '', component: CandidateProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateProfileRoutingModule { }
