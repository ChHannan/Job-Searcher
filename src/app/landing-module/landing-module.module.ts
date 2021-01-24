import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingModuleRoutingModule } from './landing-module-routing.module';
import {LandingPageComponent} from '../landing-page/landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingModuleRoutingModule
  ]
})
export class LandingModuleModule { }
