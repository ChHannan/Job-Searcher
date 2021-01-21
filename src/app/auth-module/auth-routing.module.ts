import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInPageComponent} from 'src/app/sign-in-page/sign-in-page.component';
import {SingUpPageComponent} from 'src/app/sing-up-page/sing-up-page.component';

const routes: Routes = [{
  path: 'login', component: SignInPageComponent
}, {
  path: 'signup', component: SingUpPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
