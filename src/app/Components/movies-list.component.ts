import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  movies: Movie[];
  constructor(private movieService: MovieService) {
    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.movies = m;
        }
      )
  }

}
