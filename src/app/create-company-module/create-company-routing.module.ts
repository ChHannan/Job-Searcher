import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCompanyPageComponent} from '../create-company-page/create-company-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'create'
  },
  {
    path: 'create', component: CreateCompanyPageComponent
  },
  {
    path: 'edit/:id', component: CreateCompanyPageComponent, data: {edit: true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCompanyRoutingModule { }
