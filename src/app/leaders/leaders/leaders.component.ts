import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

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
