import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";
import { UserService } from "./user-service/user.service";

@Injectable({
  providedIn:'root'
})

export class TokenInterceptorService implements HttpInterceptor{
  constructor(private userService:UserService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var tokenn=localStorage.getItem('auth');
    console.log(tokenn);
    let token=tokenn;//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxIiwibmJmIjoxNjU1NDcyMjM0LCJleHAiOjE2NTU0NzI4MzQsImlhdCI6MTY1NTQ3MjIzNH0.LU-fwpZC_dHQ6LoVFNEALmb2cAV3tn4-Z2gkwFaqm9E';

    let jwtToken=req.clone({
      setHeaders:{
        Authorization: 'Bearer '+token
      }
    })

    return next.handle(jwtToken);
  }
}
