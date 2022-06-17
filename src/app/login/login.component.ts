import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { UserService } from '../packXprez-services/user-service/user.service';
import { Router } from '@angular/router';
//import { IToken } from '../packXprez-interfaces/token';
import { cwd } from 'process';
import { Subject } from 'rxjs';
import { IToken } from '../interfaces/token';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:IToken;
  status: number;
 // address: string;
  errorMsg: string;
  msg: string;
  showDiv: boolean = false;
 public subject=new Subject;
  //key:string;
 // showDiv2: boolean = false;

  constructor(private _userService: UserService, private router: Router) { }//, private router: Router) { }

  ngOnInit() {
  }

  test(){
    this._userService.Testing().subscribe(res=>{console.log(res)});
  }
  submitLoginForm(form: NgForm) {
    this._userService.validateCredentials(form.value.email, form.value.password).subscribe(responseLoginStatus => {
      this.token = responseLoginStatus;
      console.log(this.token);
      this.showDiv = true;
      this.subject.next(this.token.token);
      if (this.token !=null) {
        this.msg = "Login Successful";
        console.log(this.status);
      //  sessionStorage.setItem('userName', form.value.email);
       // sessionStorage.setItem('userRole', this.status);
        this.router.navigate(['/home']);
       // if (this.status.toLowerCase() != "invalid credentials") {
      //    this.msg = "Login Successful";
          sessionStorage.setItem('userName', form.value.email);
     //     sessionStorage.setItem('userRole', this.status);


      }
      else {
        this.msg = "username or password is incorrect";
      }
    },
      responseLoginError => {
        this.errorMsg = responseLoginError;
        this.msg = "username or password is incorrect";
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );
    console.log(form.value.email);
    console.log(form.value.password);
   // console.log(this.status);
  }





}
