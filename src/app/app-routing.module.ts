import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourcesComponent } from './sources/sources.component';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {HeadlinesComponent} from './headlines/headlines.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'headlines', component: HeadlinesComponent, },
  { path: 'sources', component: SourcesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
