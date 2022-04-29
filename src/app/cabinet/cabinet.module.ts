import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfterLoginComponent } from './after-login/after-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from '../home-components/sub-components/home/home.component';
// import { HeaderComponent } from '../home-components/sub-components/header/header.component';
// import { FooterComponent } from '../home-components/sub-components/footer/footer.component';
@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    SidenavComponent,
    AfterLoginComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    // HomeService
  ],
})
export class CabinetModule {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
    //   component: ,
      children: routes,
      data: { reuse: true }
    };
  }
 }
