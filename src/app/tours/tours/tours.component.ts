import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor() { }

  showOthers: boolean = false;
  lessMore:string = 'More';

  ngOnInit() {
  }

  showOther = () => {
    if(this.showOthers == false) {
      this.lessMore = 'Less';
    } else {
      this.lessMore = 'More'
    }
    this.showOthers = !this.showOthers;
  }

}
