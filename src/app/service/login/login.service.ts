import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseurl = 'http://192.168.43.116:8585/';
  apiUrl: string;

  checkUser(data: string): Observable<Object> {
    this.apiUrl = ApiMap.api.loginApi.get.getUser;
    return this.http.post(`${this.baseurl}${this.apiUrl}`, data);
    
  }

  registerUser(data: string): Observable<Object> {
    this.apiUrl = ApiMap.api.registerApi.post.postUser;
    return this.http.post(`${this.baseurl}${this.apiUrl}`, data);
  }

}

