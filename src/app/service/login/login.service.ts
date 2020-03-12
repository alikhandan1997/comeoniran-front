import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkUser(data: string): Observable<Object> {
    return this.http.post('http://192.168.43.116:8585/api/login/', data);
  }

}

