import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private homeService: HomePageService
    ) { }

  leaderData = [];
  leaderTop = [];

  ngOnInit() {
    this.getLeader();    
  }

  getLeader = () => {
    let url = '?top'
    this.homeService.getLeader(url).subscribe((data) => {
      this.leaderData = Array.from(Object.keys(data['result']), k => data['result'][k]);
      this.leaderTop.push(this.leaderData[0]);
    })
  }

}
