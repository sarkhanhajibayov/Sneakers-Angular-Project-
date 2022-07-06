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
import { AddBrandComponent } from './add-brand/add-brand.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { TypesComponent } from './types/types.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { DeleteTypeComponent } from './delete-type/delete-type.component';
import { SizesComponent } from './sizes/sizes.component';
import { DeleteSizeComponent } from './delete-size/delete-size.component';
import { AddSizeComponent } from './add-size/add-size.component';
import { EmployeeComponent } from './employee/employee.component';

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
    AddBrandComponent,
    DeleteBrandComponent,
    MessageDialogComponent,
    TypesComponent,
    AddTypeComponent,
    DeleteTypeComponent,
    SizesComponent,
    DeleteSizeComponent,
    AddSizeComponent,
    EmployeeComponent,

    
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
