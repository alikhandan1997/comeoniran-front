import { Component, OnInit } from '@angular/core';
import { TripTypesService } from 'src/app/service/trip-types/trip-types.service';

@Component({
  selector: 'app-trip-type-detail',
  templateUrl: './trip-type-detail.component.html',
  styleUrls: ['./trip-type-detail.component.css']
})
export class TripTypeDetailComponent implements OnInit {

  constructor(private typeService: TripTypesService) { }

  href: string;
  hrefPart: string[];
  pageCity: string;

  filter: string;

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
    this.filter = '';
    this.typeService.getTripTypes(this.filter).subscribe((data) => {
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
