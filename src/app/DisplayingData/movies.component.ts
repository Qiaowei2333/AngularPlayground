import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  loading = false;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.loading = false;
          this.movies = m;
          // console.log('movies api called');
          // console.table(this.movies);
        }
      )
  }


}
