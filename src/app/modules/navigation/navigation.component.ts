import { Component, OnInit , Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationService } from 'src/app/service/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() Logged: any;

  href: string;
  hrefPart: string[];

  showNav: boolean = true;

  showLogin: boolean = true;
  showDestinations: boolean = false;
  showTripTypes: boolean = false;
  showLogged: boolean = false;

  loggedContent: boolean = true;
  showLoggedOptions: boolean = false;

  showCollapse: boolean = false;

  showTripTypesCollapse: boolean = false;
  showDestinationsCollapse: boolean = false;

  TripTypeChild: boolean = true;

  showTripTypesFirst: boolean = false;
  showTripTypesSeacond: boolean = false;
  showTripTypesThird: boolean = false;
  showTripTypesFourth: boolean = false;

  showAdmin: boolean = false;

  cityData = [];
  triptypeData = [];
  leaderData = [];

  constructor(
    private cookieService: CookieService,
    private navService: NavigationService
    ) { }

  ngOnInit(){

    this.href = window.location.href;
    this.hrefPart = this.href.split('/');

    if(this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'reset-password') {
      this.showLogin = !this.showLogin;
      this.showNav = !this.showNav;
    }

    if(this.cookieService.get('username') !== '') {
      this.showLogin = false;
      this.showLogged = true;
    }

    this.getDestinationCity();
    this.getTripType();
  }

  mouseEnter = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestinations = !this.showDestinations;
        this.showTripTypes = false;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
        this.showDestinations = false;
      } else if(div == 'logged') {
        this.showLoggedOptions = !this.showLoggedOptions;
      }
    }
  }

  mouseLeave = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestinations = !this.showDestinations;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
      } else if( div == 'logged') {
        this.showLoggedOptions = !this.showLoggedOptions;
      }
    }
  }

  collapseClick = (e: string) => {
    if(e == 'collapse') {
      this.showCollapse = !this.showCollapse;
    } else if(e == 'destination') {
      this.showDestinationsCollapse = !this.showDestinationsCollapse;
      this.showTripTypesCollapse = false;
    } else if(e == 'triptypes') {
      this.showTripTypesCollapse = !this.showTripTypesCollapse;
      this.showDestinationsCollapse = false;
    } else if(e == 'close') {
      this.showCollapse = !this.showCollapse;
      this.showDestinationsCollapse = false;
      this.showTripTypesCollapse = false;
    } else if(e == 'logged'){
      this.showAdmin = !this.showAdmin;
    }
  }

  tripTypesClick = (e: string) => {
    if(e == 'first') {
      this.showTripTypesFirst = !this.showTripTypesFirst;
      this.TripTypeChild = !this.TripTypeChild;
    } else if (e == 'seacond') {
      this.showTripTypesSeacond = !this.showTripTypesSeacond;
      this.TripTypeChild = !this.TripTypeChild;
    } else if (e == 'third') {
      this.showTripTypesThird = !this.showTripTypesThird;
      this.TripTypeChild = !this.TripTypeChild;
    } else if (e == 'fourth') {
      this.showTripTypesFourth = !this.showTripTypesFourth;
      this.TripTypeChild = !this.TripTypeChild;
    } 
  }

  clearCookie() {
    this.cookieService.delete('username');
    window.location.reload();
  }

  getDestinationCity = () => {
    this.navService.getDestinationCity().subscribe((data) => {
      this.cityData = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('cityData:', this.cityData);
    })
  }

  getTripType = () => {
    this.navService.getTripType().subscribe((data) => {
      this.triptypeData = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('triptypeData:', this.triptypeData);
    })
  }
}
