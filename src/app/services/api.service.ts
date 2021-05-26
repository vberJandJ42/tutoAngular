import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Building  from '../interfaces/building';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }),
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  countBuildings():Observable<number> {
    // to replace with http request
    return this.http.get<number>(`${this.apiUrl}/appartements/count`, httpOptions)
      .pipe(
        map(result => {
          return result
        })
      );
  }

  getBuildings():Observable<Building[]> {
    // to replace with http request
    return this.http.get<Building[]>(`${this.apiUrl}/appartements`, httpOptions);
  }

  getBuilding(id: string|null):Observable<Building> {
    // to replace with http request
    console.log(id);
    return this.http.get<Building>(`${this.apiUrl}/appartements/${id}`, httpOptions)
      .pipe(
        map(result => {
          console.log(result);
          return result;
        })
      );
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
