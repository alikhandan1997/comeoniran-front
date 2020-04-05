import { Component, OnInit } from '@angular/core';
import { TripTypesService } from 'src/app/service/trip-types/trip-types.service';

@Component({
  selector: 'app-trip-types',
  templateUrl: './trip-types.component.html',
  styleUrls: ['./trip-types.component.css']
})
export class TripTypesComponent implements OnInit {

  constructor(private typeService: TripTypesService) { }

  filter: string;

  topType = [];

  otherType = [];

  ngOnInit() {
    this.getTripTypes();
  }

  getTripTypes = () => {
    this.filter = '?top=4';
    this.typeService.getTripTypes(this.filter).subscribe((data) => {
      this.topType = Array.from(Object.keys(data['result']), k => data['result'][k]);
      console.log('toptype', this.topType);
    })
  }

}
