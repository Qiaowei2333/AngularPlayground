import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  loading = true;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {

    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.loading = false;
          this.movies = m;
        }
      );
  }


}
