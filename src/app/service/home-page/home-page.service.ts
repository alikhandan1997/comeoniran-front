import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ApiMap from '../apiMap/apiMap.json';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  private baseurl = 'http://195.248.241.73';
  apiUrl: string;

}
