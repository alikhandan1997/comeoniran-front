import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  href: string;
  hrefPart: string[];
  showLogin: boolean = true;
  showDestination: boolean = false;
  showTripTypes: boolean = false;

  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
    this.hrefPart = this.href.split('/');
    if(this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'resetpassword') {
      this.showLogin = !this.showLogin;
    }
  }

  mouseEnter(div : string){
    if (div == 'destination') {
      this.showDestination = !this.showDestination;
      if(this.showTripTypes == true ){
        this.showTripTypes = !this.showTripTypes;
      }
    } else if(div == 'triptypes') {
      this.showTripTypes = !this.showTripTypes;
      if(this.showDestination == true) {
        this.showDestination = !this.showDestination;
      }
    }
  }

  mouseLeave(div : string){
    if (div == 'destination') {
      this.showDestination = !this.showDestination;
    } else if(div == 'triptypes') {
      this.showTripTypes = !this.showTripTypes;
    }
  }

}
