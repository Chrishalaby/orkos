import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './Bar/search-bar/search-bar.component';
import { BoughtTicketsComponent } from './bought-tickets/bought-tickets.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { HomeComponent } from './home/home.component';
import { CookiePolicyComponent } from './legal/cookie-policy/cookie-policy.component';
import { LegalmainComponent } from './legal/legalmain/legalmain.component';
import { PrivPolicyComponent } from './legal/priv-policy/priv-policy.component';
import { RefundComponent } from './legal/refund/refund.component';
import { TermServComponent } from './legal/term-serv/term-serv.component';
import { ModuleRoutes } from './shared/enums/routes.enum';
import { ModuleType } from './shared/types/module.type';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'files-upload',
    component: FilesUploadComponent,
  },
  {
    path: 'buy-ticket',
    component: BuyTicketComponent,
  },
  {
    path: 'bought-tickets',
    component: BoughtTicketsComponent,
  },
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<ModuleType> =>
      import('./auth/auth.module').then(
        (module: ModuleType): ModuleType => module.AuthModule
      ),
  },
  {
    path: 'PrivPolicy',
    component: PrivPolicyComponent,
  },
  {
    path: 'TermServ',
    component: TermServComponent,
  },
  {
    path: 'SearchBar',
    component: SearchBarComponent,
  },
  {
    path: 'legal',
    component: LegalmainComponent,
  },
  {
    path: 'refund',
    component: RefundComponent,
  },
  {
    path: 'cookie',
    component: CookiePolicyComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
