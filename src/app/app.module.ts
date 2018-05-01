import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { GenresComponent } from './genres/genres.component';
import { GenreFormComponent } from './genres/genre-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SummaryPipe,
    CapitalizePipe,
    MovieFormComponent,
    CreateFormComponent,
    MoviesListComponent,
    MovieDetailComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    GenresComponent,
    GenreFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgProgressModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'login', component: LoginComponent },
      { path: 'genre/new', component: GenreFormComponent },
      { path: 'movie/new', component: MovieFormComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'genre/:id', component: MoviesComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
