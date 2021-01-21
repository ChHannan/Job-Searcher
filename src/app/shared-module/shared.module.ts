import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from 'src/app/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
