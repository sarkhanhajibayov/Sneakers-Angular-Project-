import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { HomeService } from './home.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeforeLoginComponent } from './before-login/before-login.component';
import { HeaderComponent } from './sub-components/header/header.component';
import { FooterComponent } from './sub-components/footer/footer.component';
import { AboutUsComponent } from './sub-components/about-us/about-us.component';
import { BrandsComponent } from './sub-components/brands/brands.component';
import { ContentComponent } from './sub-components/content/content.component';
import { InformationComponent } from './sub-components/information/information.component';
import { JoinComponent } from './sub-components/join/join.component';
import { PreFooterComponent } from './sub-components/pre-footer/pre-footer.component';
import { GalleryComponent } from './sub-components/gallery/gallery.component';
import { SignUpComponent } from './sub-components/sign-up/sign-up.component';
import { HomeComponent } from './sub-components/home/home.component';


@NgModule({
  declarations: [
   HeaderComponent, 
   FooterComponent, 
   AboutUsComponent, 
   BrandsComponent, 
   ContentComponent,
   InformationComponent,
   JoinComponent,
   PreFooterComponent,
   SignUpComponent,
   GalleryComponent,
   BeforeLoginComponent,
   HomeComponent
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
export class HomeModule {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: BeforeLoginComponent,
      children: routes,
      data: { reuse: true }
    };
  }
 }
