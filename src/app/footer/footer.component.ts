import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  href: string;
  hrefPart: string[];

  showFooter: boolean = true;

  ngOnInit() {
    this.href = window.location.href;
    this.hrefPart = this.href.split('/');
    console.log(this.href);
    
    if(this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'resetpassword') {
      this.showFooter = !this.showFooter;
    }
  }

}
