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

  constructor(
    private location: Location,
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
    ) { }

  isLogin: boolean = true;
  isReset: boolean = false;
  isRegister: boolean = false;
  isConfirm: boolean = false;

  userData: any;
  registerData: any;

  username: string;
  password: string;
  status: number;
  errorMessage: any;

  wrongData: boolean = false;

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

  onKey = (event, e) => {
    if(e == 'username') {
      this.username = event.target.value;      
    } else if (e == 'password') {
      this.password = event.target.value;
    }
    this.userData = {
      username: this.username,
      password: this.password
    }

    console.log(this.userData);
    
  }

  loginUser = () => {  
    this.loginService.checkUser(this.userData)
    .subscribe((data)=>{
      this.status = data['status'];
      if(this.status == 200 ) {
        this.cookieService.set('username', this.userData.username);
        this.router.navigate(['/']);  
      }
    },
    (error) => {
      this.status = error['status'];
      this.errorMessage = error['error']['messages'];
      console.log(this.errorMessage[1]['message'])
      if (this.errorMessage[1]['message'] != "" || this.errorMessage[0]['message'] != "") {
        this.wrongData = true;
      }
      
    }); 
  }

}
