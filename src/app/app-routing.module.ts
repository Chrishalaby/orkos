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
import { ModuleRoutes } from './shared/enums/routes.enum';
import { ModuleType } from './shared/types/module.type';
import { LoginComponent } from './auth/user-login/login/login.component';
import { PassResetComponent } from './auth/user-login/pass-reset/pass-reset.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'files-upload',
    component: FilesUploadComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  // },
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<ModuleType> => import('./auth/auth.module')
      .then((module: ModuleType): ModuleType => module.AuthModule),
  },
  // {
  //   path: 'reset-password',
  //   component: PassResetComponent
  // },
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
