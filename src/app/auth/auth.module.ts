import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInPageComponent} from 'src/app/sign-in-page/sign-in-page.component';
import {SingUpPageComponent} from 'src/app/sing-up-page/sing-up-page.component';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    SignInPageComponent,
    SingUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
