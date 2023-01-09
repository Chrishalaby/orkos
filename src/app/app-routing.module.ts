import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './Bar/search-bar/search-bar.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { HomeComponent } from './home/home.component';
import { CookiePolicyComponent } from './legal/cookie-policy/cookie-policy.component';
import { LegalmainComponent } from './legal/legalmain/legalmain.component';
import { PrivPolicyComponent } from './legal/priv-policy/priv-policy.component';
import { RefundComponent } from './legal/refund/refund.component';
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
    path: 'SearchBar',
    component: SearchBarComponent
  },
  {
    path: 'legal',
    component: LegalmainComponent
  },
  {
    path: 'refund',
    component: RefundComponent
  },
  {
    path: 'cookie',
    component: CookiePolicyComponent
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
