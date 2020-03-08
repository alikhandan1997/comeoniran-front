import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  showCollapse: boolean = false;
  justDestinations: boolean = true;
  justTripType: boolean = true;
  pageSize: number;
  cityname: string = 'iran';

  constructor( public router: Router) { }

  ngOnInit(){
    this.href = window.location.href;
    this.hrefPart = this.href.split('/');
    if(this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'resetpassword') {
      this.showLogin = !this.showLogin;
    }
  }

  mouseEnter = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestination = !this.showDestination;
        this.showTripTypes = false;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
        this.showDestination = false;
      }
    }
  }

  mouseLeave = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestination = !this.showDestination;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
      }
    }
  }

  collapseClick = ( e: string) => {
    if(e == 'collapse') {
      this.showCollapse = !this.showCollapse;
    } else if(e == 'destination') {
      this.showDestination = !this.showDestination;
      this.showTripTypes = false;
    } else if(e == 'triptypes') {
      this.showTripTypes = !this.showTripTypes;
      this.showDestination = false;
    }
  }

  cityClick = (city: string) => {
    this.cityname = city;
  }

}
