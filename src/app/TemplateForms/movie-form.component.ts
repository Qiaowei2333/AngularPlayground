import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movie: Movie = {
    id: 0,
    title: '',
    posterUrl: '',
    revenue: 0,
    imdbId: '',
    releaseDate: '',
    averageVote: 0,
    overview: '',
    tagline: '',
    genres: []
  };

  constructor() { }

  ngOnInit() {
  }
  onSave(x) {
    console.log('save clicked!');
    console.log(x);
    x.stopPropagation();
    // will stop event bubbling going up DOM tree

  }
  onClick() {
    console.log('DIV Clicked')
  }
  logControl(name) {
    console.log(name);
  }
  saveMovie(movie: Movie) {
    this.movie = movie;
    console.log(this.movie);
    console.log('Save Movie to Database by calling POST');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.movie); }
}
