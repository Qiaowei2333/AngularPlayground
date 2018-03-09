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
  loading = false;

  constructor(private movieService: MovieService, public progress: NgProgress) {

  }

  ngOnInit(): void {

    this.movieService.getAllMovies('/movies')
      .subscribe(
        m => {
          this.movies = m;
        }
      )
  }


}
