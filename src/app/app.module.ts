import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home-components/home.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';
import {CabinetModule} from './cabinet/cabinet.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    CabinetModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
