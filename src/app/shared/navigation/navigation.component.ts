import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private http: ServicesService
    ) { }

  apiData: string = '';

  // show nav variable
  showNav: boolean = true;

  // trip type content show variables
  showLogin: boolean = true;
  showDestinations: boolean = false;
  showTripTypes: boolean = false;
  showServices: boolean = false;

  // show collapse nav varibale
  showCollapse: boolean = false;

  // show collapse content varible
  showTripTypesCollapse: boolean = false;
  showDestinationsCollapse: boolean = false;
  showServicesCollapse: boolean = false;
  TripTypeChild: boolean = true;
  servicesChild: boolean = true;

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

  showAllServices: boolean = true;
  showHotelServices: boolean = false;
  showTourServices: boolean = false;
  showLeaderServices: boolean = false;

  showAllServicesCollapse: boolean = false;
  showHotelServicesCollapse: boolean = false;
  showTourServicesCollapse: boolean = false;
  showLeaderServicesCollapse: boolean = false;

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
        this.showServices = false;
      } else if(div == 'triptypes') {
        this.showTripTypes = !this.showTripTypes;
        this.showDestinations = false;
        this.showServices = false;
      } else if(div =='services') {
        this.showServices = !this.showServices;
        this.showTripTypes = false;
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
      } else if(div == 'services') {
        this.showServices = !this.showServices;
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
      this.showServicesCollapse = false;
    } else if(e == 'triptypes') {
      this.showTripTypesCollapse = !this.showTripTypesCollapse;
      this.showDestinationsCollapse = false;
      this.showServicesCollapse = false;
    } else if(e == 'services'){
      this.showServicesCollapse = !this.showServicesCollapse;
      this.showDestinationsCollapse = false;
      this.showTripTypesCollapse = false;
    } else if(e == 'close') {
      this.showCollapse = !this.showCollapse;
      this.showDestinationsCollapse = false;
      this.showTripTypesCollapse = false;
      this.showServicesCollapse = false;
    } else if (e == 'items') {
      this.showCollapse = false;
      this.showTripTypesCollapse = false;
      this.showDestinationsCollapse = false;
    } else if (e == 'type') {
      this.showCollapse = false;
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

  servicesNav(type: string) {
    if(type == 'all') {
      this.showAllServices = true;
      this.showHotelServices = false;
      this.showTourServices = false;
      this.showLeaderServices = false;
    } else if(type == 'hotels') {
      this.showHotelServices = true;
      this.showAllServices = false;
      this.showTourServices = false;
      this.showLeaderServices = false;
    } else if(type == 'tours') {
      this.showTourServices = true;
      this.showAllServices = false;
      this.showHotelServices = false;
      this.showLeaderServices = false;
    } else if(type == 'leaders') {
      this.showLeaderServices = true;
      this.showAllServices = false;
      this.showHotelServices = false;
      this.showTourServices = false;
    }
  }

  servicesClick(type: string) {
    if(type == 'all') {
      this.showAllServicesCollapse = !this.showAllServicesCollapse;
      this.servicesChild = !this.servicesChild;
    } else if(type == 'hotel') {
      this.showHotelServicesCollapse = !this.showHotelServicesCollapse;
      this.servicesChild = !this.servicesChild;
    } else if(type == 'tour') {
      this.showTourServicesCollapse = !this.showTourServicesCollapse;
      this.servicesChild = !this.servicesChild;
    } else if(type == 'leader') {
      this.showLeaderServicesCollapse = !this.showLeaderServicesCollapse;
      this.servicesChild = !this.servicesChild;
    }
  }

  // get city for destination navbar from api
  getDestinationCity = () => {
    this.http.getDestinationCity(this.apiData).subscribe((data) => {
      this.cityData = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  // get trip type for destination from api
  getTripType = () => {
    this.http.getTripType(this.apiData).subscribe((data) => {
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
