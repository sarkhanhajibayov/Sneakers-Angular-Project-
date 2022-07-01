import { NgModule } from '@angular/core';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardAvatar } from '@angular/material/card';
import { SalesComponent } from './sales/sales.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrandsComponent } from './brands/brands.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';

@NgModule({
  declarations: [
   
    SidenavComponent,
    AfterLoginComponent,
    DashboardComponent,
    SalesComponent,
    WarehouseComponent,
    DialogComponent,
    BrandsComponent,
    EditBrandComponent,

    
  ],
   entryComponents:[
    DialogComponent
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
   
  ],
})
export class CabinetModule {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: SidenavComponent ,
      children: routes,
      data: { reuse: true }
    };
  }
 }
