import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCompaniesPageComponent} from '../all-companies-page/all-companies-page.component';
import {CompanyProfilePageComponent} from '../company-profile-page/company-profile-page.component';

const routes: Routes = [
  {
    path: '', component:  CompanyProfilePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyProfileRoutingModule { }
