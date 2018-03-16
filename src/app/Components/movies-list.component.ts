import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  movies: Movie[];
  selectedMovie: Movie;
  constructor(private movieService: MovieService, public progress: NgProgress) {

  }
  ngOnInit(): void {
    this.progress.start();

  //   setTimeout(() => {
  //     /** progress ends after 2 seconds */
  //     this.progress.completed();
  // }, 2000);

    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.movies = m.slice(1, 5);
          this.progress.complete();
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
