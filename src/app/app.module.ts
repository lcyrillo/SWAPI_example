import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { FilmComponent } from './components/film/film.component';
import { AppRoutingModule } from './app-routing.module';
import { PeopleComponent } from './components/people/people.component';
import { SpecieComponent } from './components/specie/specie.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    FilmComponent,
    PeopleComponent,
    SpecieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
