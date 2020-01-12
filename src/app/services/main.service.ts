import { Injectable } from '@angular/core';
import {ApiService} from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  querySearch: object[] = [];

  sourcesInfo: object[] = [];

  generalHeadNewsInfo: object[] = [];

  newspaperNews: object[] = [];

  language = 'en';
  country = 'us';


  selection: object[] = [
    {name: 'Argentina', language: 'es', country: 'ar'},
    {name: 'Germany', language: 'de', country: 'de'},
    {name: 'EE.UU', language: 'en', country: 'us'},
    {name: 'France', language: 'fr', country: 'fr'},
    {name: 'Italy', language: 'it', country: 'it'},
    {name: 'Canada', language: 'en', country: 'ca'},
    {name: 'Brasil', language: 'br', country: 'pt'},
    {name: 'Ireland', language: 'en', country: 'ie'},
    {name: 'Russia', language: 'ru', country: 'ru'},

  ];

  constructor(public apiService: ApiService, public router: Router) {
    this.getSourcesInfo(this.language, this.country);
    this.getGeneralHeadNewsByCountry(this.country);


  }

  getSourcesInfo(language: string, country: string) {

    this.apiService.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/sources?language=${language}
    &country=${country}&apiKey=2e5968a8e581407c84c87d2659f3ffae`).subscribe(response => {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < response.sources.length; i++) {

        this.sourcesInfo.push(response.sources[i]);
      }


    });
    this.sourcesInfo = [];

  }

  getGeneralHeadNewsByCountry(country: string) {

    this.apiService.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?category=general&country=${country}
    &apiKey=2e5968a8e581407c84c87d2659f3ffae`).subscribe(response => {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < response.articles.length; i++) {

        this.generalHeadNewsInfo.push(response.articles[i]);
      }

    });
    this.generalHeadNewsInfo = [];

  }

  getNewspaperNews(idSource) {

    this.apiService.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${idSource}
    &apiKey=2e5968a8e581407c84c87d2659f3ffae`).subscribe(response => {
      this.newspaperNews = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < response.articles.length; i++) {

        this.newspaperNews.push(response.articles[i]);
      }

    });


  }

  SearchByQuery(text: string) {
    this.apiService.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${text}
    &apiKey=2e5968a8e581407c84c87d2659f3ffae`).subscribe(response => {
      this.querySearch = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < response.articles.length; i++) {

        this.querySearch.push(response.articles[i]);
      }

      console.log(this.querySearch);
    });

  }


}
