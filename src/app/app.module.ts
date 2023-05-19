import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';
import { environment } from 'src/environments/environment';
import { LowBarComponent } from './Bar/low-bar/low-bar.component';
import { SearchBarComponent } from './Bar/search-bar/search-bar.component';
import { SideBarComponent } from './Bar/side-bar/side-bar.component';
import { TopBarComponent } from './Bar/top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { REDUCER_PROVIDER, getInitialState, reducerToken } from './app.store';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthRepository } from './auth/shared/auth.repository';
import { AuthEffects } from './auth/store/auth.effects';
import { AuthFacade } from './auth/store/auth.facade';
import { authReducer } from './auth/store/auth.reducer';
import { BoughtTicketsComponent } from './bought-tickets/bought-tickets.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { HomeComponent } from './home/home.component';
import { InfodialogueComponent } from './home/infodialogue/infodialogue.component';
import { CookiePolicyComponent } from './legal/cookie-policy/cookie-policy.component';
import { LegalmainComponent } from './legal/legalmain/legalmain.component';
import { PrivPolicyComponent } from './legal/priv-policy/priv-policy.component';
import { RefundComponent } from './legal/refund/refund.component';
import { TermServComponent } from './legal/term-serv/term-serv.component';
import { ModuleRoutes } from './shared/enums/routes.enum';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FilesUploadComponent,
    PrivPolicyComponent,
    TermServComponent,
    LowBarComponent,
    SearchBarComponent,
    LegalmainComponent,
    RefundComponent,
    CookiePolicyComponent,
    InfodialogueComponent,
    TicketComponent,
    SideBarComponent,
    BuyTicketComponent,
    BoughtTicketsComponent,
  ],
  imports: [
    CommonModule,
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
    MenuModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    TooltipModule,
    DynamicDialogModule,
    OverlayPanelModule,
    PasswordModule,
    DividerModule,
    CardModule,
    ChipModule,
    TabMenuModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RippleModule,
    StoreModule.forRoot(reducerToken, { initialState: getInitialState }),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forFeature(ModuleRoutes.Auth, authReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    MessageService,
    REDUCER_PROVIDER,
    DialogService,
    AuthFacade,
    AuthRepository,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
