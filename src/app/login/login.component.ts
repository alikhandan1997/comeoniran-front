import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private cookieValue: string;

  isLogin: boolean = true;
  isReset: boolean = false;
  isRegister: boolean = false;
  isConfirm: boolean = false;
  data: any;
  username: string;
  password: string;
  status: number;

  constructor(
    private location: Location,
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
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

  onKey(event, e) {
    if(e == 'username') {
      this.username = event.target.value;
      console.log(event);
    } else if (e == 'password') {
      this.password = event.target.value;
    }
    this.data = {
      username: this.username,
      password: this.password
    }
  }

  loginUser() {  
    this.loginService.checkUser(this.data)
    .subscribe((data)=>{
      this.status = data['status'];
    },
    (error) => {
      this.status = error['status'];
    }); 
    if(this.status == 200 ) {
      this.cookieService.set('username', this.data.username);
      this.router.navigate(['/']);  
    }
  }

}
