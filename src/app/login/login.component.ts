import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = true;
  isReset: boolean = false;
  isRegister: boolean = false;
  isConfirm: boolean = false;
  data: any;

  constructor(
    private location: Location,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.data = {
      username: "admfdjhin",
      password: "admin"
    }
    this.loginService.checkUser(this.data)
    .subscribe((data)=>{
      console.log(data);
    });
  }

  urlChange = (a) => {
    if (a == 'forgot'){
      
      this.location.replaceState('/resetpassword');
      this.isReset = true;
      this.isLogin = false;
    } else if (a == 'register'){

      this.location.replaceState('/register');
      this.isLogin = !this.isLogin;
      this.isRegister = !this.isRegister;
    } else if (a == 'reset') {

      this.isLogin = !this.isLogin;
      this.isReset = !this.isReset;
    }
  }

}
