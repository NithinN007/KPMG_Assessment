import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
//import { UserService } from '../app/packXprez-services/user-service/user.service';
import { HomeComponent } from '../app/home/home.component';
import { routing } from '../app.routing';
import { CommonLayoutComponent } from '../app/common-layout/common-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
//import { TokenInterceptorService } from './packXprez-services/token-interceptor.service';
import { UserService } from './services/user-service/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommonLayoutComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ UserService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
