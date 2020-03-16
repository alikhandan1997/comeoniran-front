import { Component, OnInit } from '@angular/core';
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
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
    ) { }

  userData: any;

  username: string;
  password: string;
  status: number;
  errorMessage: any;

  wrongData: boolean = false;

  ngOnInit() {
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
      if (this.errorMessage[1]['message'] != "" || this.errorMessage[0]['message'] != "") {
        this.wrongData = true;
      }
      
    }); 
  }

}
