import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {

  constructor(private _userService: UserService) { }
  errorMsg?:string;
  msg?:string;
  ngOnInit() {
  }

  test(){
    this._userService.Testing().subscribe(res=>{console.log(res);
    this.msg="Authorized";
    console.log(this.msg);
    }
    ,
        responseLoginError => {
          this.errorMsg = responseLoginError;
          this.msg = "No Access";
          console.log(this.msg);
        },
        () => console.log("Authorized")
      );

  }

  empty(){
    localStorage.setItem('auth','');
    console.log(localStorage.getItem('auth'));
  }
}
