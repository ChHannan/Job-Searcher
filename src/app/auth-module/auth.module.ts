import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInPageComponent} from 'src/app/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from 'src/app/sign-up-page/sign-up-page.component';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
