import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private baseurl = ApiMap.api.baseUrl;
  apiUrl: string;

  getDestinationCity(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getDestinationCity;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

  getDestinationCountry(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getDestinationCountry;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

  getLeader(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getLeader;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

  getService(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getService;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

  getTripType(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getTripType;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

}
