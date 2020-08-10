import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/serviceis/services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private http: ServicesService
    ) { }

  topLeader = [];
  topHotel = [];
  topTour = [];
  topCity = [];

  lastLeaders = [];
  lastHotels = [];
  lastTours = [];

  apiData: string = '';


  ngOnInit() {
    this.getLeader();
    this.getHotels();
    this.getTours();
    this.getCity();
  }

  getLeader = () => {
    this.apiData = '?top=1';
    this.http.getLeader(this.apiData).subscribe((data) => {
      this.topLeader = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.apiData = '?last=2';
    this.http.getLeader(this.apiData).subscribe((data) => {
      this.lastLeaders = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getHotels = () => {
    this.apiData = '?type=hotel&last=4';
    this.http.getService(this.apiData).subscribe((data) => {
      this.lastHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.apiData = '?type=hotel&top=1';
    this.http.getService(this.apiData).subscribe((data) => {
      this.topHotel = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getTours = () => {
    this.apiData = '?type=tour&last=4';
    this.http.getService(this.apiData).subscribe((data) => {
      this.lastTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
    this.apiData = '?type=tour&top=1';
    this.http.getService(this.apiData).subscribe((data) => {
      this.topTour = Array.from(Object.keys(data['result']), k => data['result'][k]);
    })
  }

  getCity = () => {
    this.apiData = '?last=1';
    this.http.getDestinationCity(this.apiData).subscribe((data) => {
      this.topCity = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('topcity', this.topCity)
    })
  }

}
