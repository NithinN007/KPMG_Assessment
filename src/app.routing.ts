import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../src/app/home/home.component';
import { LoginComponent } from '../src/app/login/login.component';
//import { LocationCheckComponent } from '../src/app/location-check/location-check.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
