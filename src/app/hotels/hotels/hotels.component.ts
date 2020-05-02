import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private Service: ServicesService) { }

  showOthers: boolean = false;
  lessMore:string = 'More';

  filter: string;

  topHotels = [];
  otherHotels = [];

  ngOnInit() {
    this.getHotels(); 
  }

  showOther = () => {
    if(this.showOthers == false) {
      this.lessMore = 'Less';
    } else {
      this.lessMore = 'More';
      window.scroll(0,0);
    }
    this.showOthers = !this.showOthers;
  }

  getHotels = () => {
    this.filter = '?type=hotel&top=4';
    this.Service.getService(this.filter).subscribe((data) => {
      this.topHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('top', this.topHotels);
    })
    this.filter = '?type=hotel';
    this.Service.getService(this.filter).subscribe((data) => {
      this.otherHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('last', this.otherHotels);
    })
  }
}
