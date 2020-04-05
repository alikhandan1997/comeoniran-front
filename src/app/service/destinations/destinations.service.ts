import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) { }

  private baseurl = 'http://comeoniran.com';
  apiUrl: string;

  getDestinationCity(): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getDestinationCity;
    return this.http.get(`${this.baseurl}${this.apiUrl}`);
  }

}
