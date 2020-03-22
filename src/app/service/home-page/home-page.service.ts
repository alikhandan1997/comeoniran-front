import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  private baseurl = 'http://192.168.43.116:8585/';
  apiUrl: string;

  getCity = (): Observable<Object> => {
    this.apiUrl = ApiMap.api.servicesApi.get.getCity;
    return this.http.get(`${this.baseurl}${this.apiUrl}`);
  }

  getCountry = (): Observable<Object> => {
    this.apiUrl = ApiMap.api.servicesApi.get.getCountry;
    return this.http.get(`${this.baseurl}${this.apiUrl}`);
  }

  getTripType = (): Observable<Object> => {
    this.apiUrl = ApiMap.api.servicesApi.get.getTripType;
    return this.http.get(`${this.baseurl}${this.apiUrl}`);
  }
}
