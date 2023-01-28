import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import {CardModule} from 'primeng/card';
// import { ModuleType } from '@Types/module.type';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import { ModuleRoutes } from '@Enums/routes.enum';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { AuthRepository } from './shared/auth.repository';
import { SharedModule } from 'primeng/api';
import { ModuleRoutes } from '../shared/enums/routes.enum';
import { ModuleType } from '../shared/types/module.type';
import { SignupComponent } from './user-login/signup/signup.component';
import { LoginComponent } from './user-login/login/login.component';
import { PassResetComponent } from './user-login/pass-reset/pass-reset.component';
// import { SharedModule } from 'app/shared/shared.module';

const primengModules: ModuleType = [
  CardModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,
  DividerModule,
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    PassResetComponent
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(ModuleRoutes.Auth, authReducer),
    CommonModule,
    ...primengModules,
  ],
  providers: [
    AuthFacade,
    AuthRepository,
  ],
})
export class AuthModule {
}
