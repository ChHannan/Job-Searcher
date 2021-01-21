import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { JobDetailPageComponent } from './job-detail-page/job-detail-page.component';
import { CandidateProfilePageComponent } from './candidate-profile-page/candidate-profile-page.component';
import { EmployerProfilePageComponent } from './employer-profile-page/employer-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
