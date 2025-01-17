import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInPageComponent} from 'src/app/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from 'src/app/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: SignInPageComponent
  },
  {
    path: 'signup', component: SignUpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
