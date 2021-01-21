import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
