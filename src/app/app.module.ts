import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Bar/top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';
import { LoginComponent } from './user-login/login/login.component';
import {PasswordModule} from 'primeng/password';
import { SignupComponent } from './user-login/signup/signup.component';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducerToken, getInitialState, REDUCER_PROVIDER } from './app.store';
import { PassResetComponent } from './user-login/pass-reset/pass-reset.component';
import { PrivPolicyComponent } from './legal/priv-policy/priv-policy.component';
import { TermServComponent } from './legal/term-serv/term-serv.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { LowBarComponent } from './Bar/low-bar/low-bar.component';
import { SearchBarComponent } from './Bar/search-bar/search-bar.component';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FilesUploadComponent,
    LoginComponent,
    SignupComponent,
    PassResetComponent,
    PrivPolicyComponent,
    TermServComponent,
    LowBarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    SidebarModule,
    FileUploadModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    TooltipModule,
    DynamicDialogModule,
    PasswordModule,
    DividerModule,
    CardModule,
    ChipModule,
    RippleModule,
    StoreModule.forRoot(reducerToken, { initialState: getInitialState}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [MessageService, REDUCER_PROVIDER, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
