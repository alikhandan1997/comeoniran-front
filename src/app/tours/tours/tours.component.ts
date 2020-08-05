import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor(private http: ServicesService) { }

  showOthers: boolean = false;
  lessMore: string = 'More';

  apiData: string = '';

  topTours = [];
  otherTours = [];

  ngOnInit() {
    this.getTours();
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

  getTours = () => {
    this.apiData = '?type=tour&top=4';
    this.http.getService(this.apiData).subscribe((data) => {
      this.topTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('top', this.topTours);
    })
    this.apiData = '?type=tour';
    this.http.getService(this.apiData).subscribe((data) => {
      this.otherTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('last', this.otherTours);
    })
  }

}
