import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private baseurl = 'http://comeoniran.com';
  apiUrl: string;

  getService(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getService;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }

  getLeader(filter: string): Observable<Object> {
    this.apiUrl = ApiMap.api.servicesApi.get.getLeader;
    return this.http.get(`${this.baseurl}${this.apiUrl}${filter}`);
  }
  
}
