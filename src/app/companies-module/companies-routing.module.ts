import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCompaniesPageComponent} from 'src/app/all-companies-page/all-companies-page.component';

const routes: Routes = [
  {
    path: '', component:  AllCompaniesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
