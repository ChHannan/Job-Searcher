import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyBoxComponent} from 'src/app/shared-module/company-box/company-box.component';
import {JobBoxComponent} from 'src/app/shared-module/job-box/job-box.component';
import {NavBarComponent} from 'src/app/shared-module/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavBarComponent,
    CompanyBoxComponent,
    JobBoxComponent,
    FooterComponent
  ],
  exports: [
    NavBarComponent,
    CompanyBoxComponent,
    JobBoxComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
