import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor(private tourService: ServicesService) { }

  showOthers: boolean = false;
  lessMore: string = 'More';

  filter: string;

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
    this.filter = '?type=tour&top=4';
    this.tourService.getService(this.filter).subscribe((data) => {
      this.topTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('top', this.topTours);
    })
    this.filter = '?type=tour';
    this.tourService.getService(this.filter).subscribe((data) => {
      this.otherTours = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('last', this.otherTours);
    })
  }

}
