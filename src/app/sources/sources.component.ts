
import { Component, OnInit } from '@angular/core';
import { HeadlinesnewsService } from '../services/headlinesnews.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  news;
  selected;

  sources = [
    {
      id: 'abc-news',
      name: 'ABC News'

    },
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)'

    },
    {
      id: 'aftenposten',
      name: 'Aftenposten'

    },
    {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'

    },
    {
      id: 'ansa',
      name: 'ANSA.it'

    },
    {
      id: 'breitbart-news',
      name: 'Breitbart News'

    },
    {
      id: 'business-insider',
      name: 'Business Insider'

    }];

  constructor(private headlinesnewsService: HeadlinesnewsService) { }

  ngOnInit() {
    this.selected = this.sources[0].id;
    this.getData(this.selected);
  }

  onSourceChange(){
    this.getData(this.selected);
  }

  getData(selected) {
    this.headlinesnewsService.getData(`top-headlines?sources=${selected}`).subscribe(data => {
      this.news = data;
    });
  }

}
