import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const apiKey = '85dd41c4b93540989c0af0e522153edc';

const apiUrl = 'https://newsapi.org/v2';

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class HeadlinesnewsService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(`${apiUrl}/${url}`, {params}).pipe(tap(value => {
        console.log(value);
      })
    );
  }
}
