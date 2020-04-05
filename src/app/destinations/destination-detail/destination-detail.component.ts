import {Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/service/destinations/destinations.service';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from  'ol/source/OSM';
import View from 'ol/View';


@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {

  map;

  href: string;
  hrefPart: string[];
  pageCity: string;

  cityData = [];

  cityName: string;
  cityImage: string;


  constructor(
    private cityService: DestinationsService
  ) {}

  ngOnInit() {
    this.initilizeMap();
    this.href = window.location.href;
    this.hrefPart = this.href.split('/');
    this.pageCity = this.hrefPart[4];
    this.getCity(); 
  }

  initilizeMap () {
    this.map  = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: [37.41, 8.82],
        zoom: 4
      })
    });
  }

  getCity = () => {
    this.cityService.getDestinationCity().subscribe((data) => {
      this.cityData = Array.from(Object.keys(data['result']), k => data['result'][k]);
      for(let i=0; i<this.cityData.length; i++) {
        if(this.cityData[i].name == this.pageCity) {
          this.cityName = this.cityData[i].name;
          this.cityImage = this.cityData[i].image;
        }
      }
    })
  }

}
