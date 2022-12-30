import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { HomeComponent } from './home/home.component';
import { PrivPolicyComponent } from './legal/priv-policy/priv-policy.component';
import { TermServComponent } from './legal/term-serv/term-serv.component';
import { LoginComponent } from './user-login/login/login.component';
import { PassResetComponent } from './user-login/pass-reset/pass-reset.component';
import { SignupComponent } from './user-login/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'files-upload',
    component: FilesUploadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'reset-password',
    component: PassResetComponent
  },
  {
    path: 'PrivPolicy',
    component: PrivPolicyComponent
  },
  {
    path: 'TermServ',
    component: TermServComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
