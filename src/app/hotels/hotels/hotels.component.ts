import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private http: ServicesService) { }

  showOthers: boolean = false;
  lessMore:string = 'More';

  apiData: string = '';

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
    this.apiData = '?type=hotel&top=4';
    this.http.getService(this.apiData).subscribe((data) => {
      this.topHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('top', this.topHotels);
    })
    this.apiData = '?type=hotel';
    this.http.getService(this.apiData).subscribe((data) => {
      this.otherHotels = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('last', this.otherHotels);
    })
  }
}
