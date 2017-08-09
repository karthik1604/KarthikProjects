
import { NgModule }      from '@angular/core';
import { provideRoutes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
//import { AppRoutingModule} from './app.routing';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
//import {FormService} from "./register/register.service";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,AppRoutingModule],
  declarations: [AppComponent,LoginComponent,HomeComponent,UserComponent,RegisterComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }