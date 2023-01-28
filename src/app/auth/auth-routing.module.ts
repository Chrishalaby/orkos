import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutes } from '../shared/enums/routes.enum';
import { LoginComponent } from './user-login/login/login.component';
import { PassResetComponent } from './user-login/pass-reset/pass-reset.component';
import { SignupComponent } from './user-login/signup/signup.component';


const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: LoginComponent,
  },
  {
    path: AuthRoutes.SignUp,
    component: SignupComponent,
  },
  {
    path: AuthRoutes.PassReset,
    component: PassResetComponent,
  },
  {
    path: AuthRoutes.Empty,
    redirectTo: AuthRoutes.SignUp,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
