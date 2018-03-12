import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './DisplayingData/movies.component';
import { MovieService } from './Services/movie.service';
import { GenreService } from './Services/genre.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';

import { MovieFormComponent } from './TemplateForms/movie-form.component';
import { CreateFormComponent } from './HandlingEvents/create-form.component';
import { MoviesListComponent } from './components/movies-list.component';
import { MovieDetailComponent } from './components/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SummaryPipe,
    CapitalizePipe,
    MovieFormComponent,
    CreateFormComponent,
    MoviesListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgProgressModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
