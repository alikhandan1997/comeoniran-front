import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = 'http://192.168.43.116:8585/';
  apiUrl: string;

  constructor(private http: HttpClient) { }

  checkUser(data: string): Observable<Object> {
    this.apiUrl = ApiMap.api.loginApi.checkUser
    return this.http.post(`${this.baseurl}${this.apiUrl}`, data);
    
  }

  registerUser(data: string): Observable<Object> {
    this.apiUrl = ApiMap.api.loginApi.registerUser;
    return this.http.post(`${this.baseurl}${this.apiUrl}`, data);
  }

}

