import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployerProfilePageComponent} from '../employer-profile-page/employer-profile-page.component';

const routes: Routes = [
  {
    path: '', component: EmployerProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerProfileRoutingModule { }
