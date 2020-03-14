import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = 'http://192.168.43.116:8585/';

  constructor(private http: HttpClient) { }

  checkUser(data: string): Observable<Object> {
    return this.http.post(`${this.baseurl} + 'api/login/'`, data);
  }

  registerUser(data: string): Observable<Object> {
    return this.http.post(`${this.baseurl} + 'api/register/'`, data);
  }

}

