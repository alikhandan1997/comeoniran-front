import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private navService: NavigationService
    ) { }

  // show nav variable 
  showNav: boolean = true;

  // trip type content show variables 
  showLogin: boolean = true;
  showDestinations: boolean = false;
  showTripTypes: boolean = false;

  // show collapse nav varibale 
  showCollapse: boolean = false;

  // show collapse content varible 
  showTripTypesCollapse: boolean = false;
  showDestinationsCollapse: boolean = false;
  TripTypeChild: boolean = true;

  // show trip type content varibale 
  showTripTypesFirst: boolean = false;
  showTripTypesSeacond: boolean = false;
  showTripTypesThird: boolean = false;
  showTripTypesFourth: boolean = false;

  // api array varibale 
  cityData = [];
  triptypeData = [];
  leaderData = [];

  // trip type content api variable 
  travelStyleRight = [];
  travelStyleLeft = [];
  travelStyle = [];
  interestRight = [];
  interestLeft = [];
  interest = [];
  weatherRight = [];
  weatherLeft = [];
  weather = [];

  ngOnInit(){
    // calling api functions 
    this.getDestinationCity();
    this.getTripType();
  }

  // show navigation content on hover 
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

  // hide navigation content on hover out 
  mouseLeave = (div : string) => {
    if(this.showCollapse == false) {
      if (div == 'destination') {
        this.showDestinations = !this.showDestinations;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
      }
    }
  }

  // clicking in collapse navigation 
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
    } else if (e == 'items') {
      this.showCollapse = false;
      this.showTripTypesCollapse = false;
      this.showDestinationsCollapse = false;
    }
  }

  // click in  trip type content 
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

  // get city for destination navbar from api 
  getDestinationCity = () => {
    this.navService.getDestinationCity().subscribe((data) => {
      this.cityData = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  // get trip type for destination from api 
  getTripType = () => {
    this.navService.getTripType().subscribe((data) => {
      this.triptypeData = Array.from(Object.keys(data['result']), k => data['result'][k]);
      for(let i=0; i<this.triptypeData.length; i++){
        if(this.triptypeData[i].type == 1) {
          if((i%2 == 0)){
            this.travelStyleLeft.push(this.triptypeData[i]);
          } else {
            this.travelStyleRight.push(this.triptypeData[i]);
          }
          this.travelStyle.push(this.triptypeData[i]);
        } else if (this.triptypeData[i].type == 2) {
          if((i%2 == 0)){
            this.interestLeft.push(this.triptypeData[i]);
          } else {
            this.interestRight.push(this.triptypeData[i]);
          }
          this.interest.push(this.triptypeData[i]);
        } else if (this.triptypeData[i].type == 3){
          if((i%2 == 0)){
            this.weatherLeft.push(this.triptypeData[i]);
          } else {
            this.weatherRight.push(this.triptypeData[i]);
          }
          this.weather.push(this.triptypeData[i]);
        }
      }
    })
  }
}
