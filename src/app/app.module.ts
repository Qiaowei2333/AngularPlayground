import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './DisplayingData/movies.component';
import { MovieService } from './Services/movie.service';
import { GenreService } from './Services/genre.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
