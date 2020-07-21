import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  constructor(private http: ServicesService) { }

  showOthers: boolean = false;
  lessMore:string = 'More';

  apiData: string = '';

  topLeaders = [];
  otherLeaders = [];

  ngOnInit() {
    this.getLeaders();
  }

  showOther = () => {
    if(this.showOthers == false) {
      this.lessMore = 'Less';
    } else {
      this.lessMore = 'More'
      window.scroll(0,0);
    }
    this.showOthers = !this.showOthers;
  }

  getLeaders = () => {
    this.apiData = '?top=4';
    this.http.getLeader(this.apiData).subscribe((data) => {
      this.topLeaders = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('top', this.topLeaders);
    })
    this.apiData = '';
    this.http.getLeader(this.apiData).subscribe((data) => {
      this.otherLeaders = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('last', this.otherLeaders);
    })
  }

}
