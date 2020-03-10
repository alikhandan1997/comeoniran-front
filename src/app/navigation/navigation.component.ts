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
  showDestinations: boolean = false;
  showTripTypes: boolean = false;
  showCollapse: boolean = false;
  showTripTypesCollapse: boolean = false;
  showDestinationsCollapse: boolean = false;
  cityname: string = 'iran';

  constructor() { }

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
        this.showDestinations = !this.showDestinations;
        this.showTripTypes = false;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
        this.showDestinations = false;
      }
    }
  }

  mouseLeave = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestinations = !this.showDestinations;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
      }
    }
  }

  collapseClick = ( e: string) => {
    if(e == 'collapse') {
      this.showCollapse = !this.showCollapse;
    } else if(e == 'destination') {
      this.showDestinationsCollapse = !this.showDestinationsCollapse;
      this.showTripTypesCollapse = false;
    } else if(e == 'triptypes') {
      this.showTripTypesCollapse = !this.showTripTypesCollapse;
      this.showDestinationsCollapse = false;
    }
  }

  cityClick = (city: string) => {
    this.cityname = city;
  }

}
