import { Component, OnInit } from '@angular/core';
import { CommonLayoutComponent } from '../../app/common-layout/common-layout.component';
import { UserService } from '../services/user-service/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private _userService: UserService){}
  errorMsg?:string;
  msg?:string;

  ngOnInit()
{
}

test(){
  this._userService.Testing().subscribe(res=>{console.log(res);
  this.msg="Authorized";
  }
  ,
      responseLoginError => {
        this.errorMsg = responseLoginError;
        this.msg = "No Access";
      },
      () => console.log("Authorized")
    );

}

}
