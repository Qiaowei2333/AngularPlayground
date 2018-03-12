import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  movies: Movie[];
  selectedMovie: Movie;
  constructor(private movieService: MovieService) {

  }
  ngOnInit(): void {
    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.movies = m.slice(1, 5);
        }
      )
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    // console.log(this.selectedMovie.overview);
  }
  onMovieEdited(movie: Movie) {
    // call the service to save updated movie
    console.log(movie);
    console.log('Child component edited movie!');
  }

}
