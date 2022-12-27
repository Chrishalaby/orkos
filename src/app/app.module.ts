import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    SidebarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
