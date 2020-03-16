import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  userData: any;

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  country: string;
  region: number;
  gender: number;

  corporationObj1;
  corporationObj2;

  Fill: boolean; 
  Email: boolean;
  Pass: boolean; 
  Select: boolean;
  errorContent: string;

  status: number;
  errorMessage: any;

  ngOnInit() {
  }

  registerUser = () => {
    this.Fill= false;
    this.Email = false;
    this.Pass = false;
    this.Select = false;
    this.loginService.registerUser(this.userData)
    .subscribe((data)=>{
      this.status = data['status'];
      console.log(data);
      
      // if(this.status == 200 ) {
      //   this.cookieService.set('username', this.userData.username);
      //   this.router.navigate(['/']);  
      // }
    },
    (error) => {
      this.status = error['status'];  
      console.log(error['error']);
      if(error['status'] == 400) {
        this.errorMessage = error['error']['messages'];
        console.log(this.errorMessage.length)
        for (let i = 0; i < this.errorMessage.length; i++){
          console.log(this.errorMessage[i]['field'])
          if(this.errorMessage[i]['field'] == 'first_name' || this.errorMessage[i]['field'] == 'last_name' || this.errorMessage[i]['field'] == 'email' || this.errorMessage[i]['field'] == 'country') {
            console.log('fuck');
            this.Fill = true;
            this.errorContent = this.errorMessage[i]['message'];
          }
          if(this.errorMessage[i]['field'] == "password" || this.errorMessage[i]['field'] == "confirm_password"){
            this.Pass = true;
            this.errorContent = this.errorMessage[i]['message'];
          }
          if(this.errorMessage[i]['field'] == 'region' || this.errorMessage[i]['field'] == 'gender') {
            this.Select = true;
            this.errorContent = this.errorMessage[i]['message'];
          }
        }
      }
          
    }); 
  }

  onKey = (event, e) => {
    if(e == 'firstname') {
      this.firstname = event.target.value;      
    } else if (e == 'lastname') {
      this.lastname = event.target.value;
    } else if (e == 'email') {
      this.email = event.target.value;
    } else if (e == 'password') {
      this.password = event.target.value;
    } else if (e == 'confpassword') {
      this.confirmpassword = event.target.value;
    } else if (e == 'country') {
      this.country = event.target.value;
    } else if (e == 'region') {
      this.region = parseInt(this.corporationObj1)
    } else if (e == 'gender') {
      this.gender = parseInt(this.corporationObj2)
    }

    this.userData = {
      first_name: this.firstname,
      last_name: this.lastname,
      password: this.password,
      confirm_password: this.confirmpassword,
      email: this.email,
      country: this.country,
      gender: this.gender,
      region: this.region
    }

    console.log(this.userData);
  }

}
