import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-trip-type-detail',
  templateUrl: './trip-type-detail.component.html',
  styleUrls: ['./trip-type-detail.component.css']
})
export class TripTypeDetailComponent implements OnInit {

  constructor(private http: ServicesService) { }

  href: string;
  hrefPart: string[];
  pageCity: string;

  apiData: string = '';

  types = [];

  typeName: string;
  typeImage: string;

  ngOnInit() {
    this.href = window.location.href;
    this.hrefPart = this.href.split('/');
    this.pageCity = this.hrefPart[4];
    console.log(this.pageCity)
    this.getTripTypes();
  }

  getTripTypes = () => {
    this.apiData = '';
    this.http.getTripType(this.apiData).subscribe((data) => {
      this.types = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('toptype', this.types);
      for(let i=0; i<this.types.length; i++) {
        if(this.types[i].id == this.pageCity) {
          this.typeName = this.types[i].name;
          this.typeImage = this.types[i].image;
        }
      }
    })
  }

}
