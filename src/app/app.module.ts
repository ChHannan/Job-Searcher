import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {AuthenticationInterceptorService} from 'src/app/services/authentication-interceptor.service';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


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
    LoadingBarHttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
