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

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SummaryPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
