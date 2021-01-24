import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ApplyJobPageComponent} from './apply-job-page/apply-job-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateCompanyPageComponent } from './create-company-page/create-company-page.component';
import { ManageResumePageComponent } from './manage-resume-page/manage-resume-page.component';
import {SharedModule} from './shared-module/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
