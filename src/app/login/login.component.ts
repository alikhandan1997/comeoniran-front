import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = true;
  isReset: boolean = false;
  isRegister: boolean = false;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  urlChange = (a) => {
    if(a == 'forgot'){
      this.location.replaceState('/ResetPassword');
      this.isReset = true;
      this.isLogin = false;
    } else if (a == 'register'){
    this.location.replaceState('/register');
    this.isLogin = !this.isLogin;
    this.isRegister = !this.isRegister;
    }
    
  }

}
