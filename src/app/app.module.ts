import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { HeadlinesComponent} from './headlines/headlines.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NewsService } from './services/news.service';
import {ApiService} from './services/api.service';
import {SourcesComponent} from './sources/sources.component';
import {MainService} from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    HomeComponent,
    HeadlinesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NewsService, ApiService, MainService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
