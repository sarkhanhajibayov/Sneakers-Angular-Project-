import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home-components/home.module';
import { BeforeLoginComponent } from './home-components/before-login/before-login.component';
import { SignUpComponent } from './home-components/sub-components/sign-up/sign-up.component';
import { HomeComponent } from './home-components/sub-components/home/home.component';
import { AfterLoginComponent } from './cabinet/after-login/after-login.component';
import { CabinetModule } from './cabinet/cabinet.module';
import { DashboardComponent } from './cabinet/dashboard/dashboard.component';
import { SalesComponent } from './cabinet/sales/sales.component';
import { WarehouseComponent } from './cabinet/warehouse/warehouse.component';
import { BrandsComponent } from './cabinet/brands/brands.component';
const routes: Routes = [
  
  HomeModule.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
 
  ]),
 CabinetModule.childRoutes([
   {path: 'after-login' , component: AfterLoginComponent},
   {path: 'dashboard' , component: DashboardComponent},
   {path: 'sales' , component: SalesComponent},
   {path: 'warehouse' , component: WarehouseComponent},
   {path: 'brands' , component: BrandsComponent}
 ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
