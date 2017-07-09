import { Injectable } from '@angular/core';
import {Http, Headers,Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BackendService {

  http : Http;
  baseUrl: string = 'https://todo-5d500.firebaseio.com/ToDo';
  constructor(http: Http) { 
    this.http = http;
  }

  fetchAppData(): Observable<any>{
      const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(`${this.baseUrl}.json`, {headers}).map(this.extractData).share();
  }

  extractData(res:Response){
    // let resobj= <ttResults>(res.json());
    return res.json();
  }

}
