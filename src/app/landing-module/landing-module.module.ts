import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { LandingModuleRoutingModule } from './landing-module-routing.module';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
        LandingModuleRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class LandingModuleModule { }
