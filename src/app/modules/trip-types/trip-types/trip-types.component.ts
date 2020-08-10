import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/serviceis/services.service';

@Component({
  selector: 'app-trip-types',
  templateUrl: './trip-types.component.html',
  styleUrls: ['./trip-types.component.css']
})
export class TripTypesComponent implements OnInit {

  constructor(private http: ServicesService) { }

  apiData: string = '';

  topType = [];

  otherType = [];

  ngOnInit() {
    this.getTripTypes();
  }

  getTripTypes = () => {
    this.apiData = '?top=4';
    this.http.getTripType(this.apiData).subscribe((data) => {
      this.topType = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('toptype', this.topType);
    })
  }

}
