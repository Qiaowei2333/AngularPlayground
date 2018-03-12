import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieEdited = new EventEmitter<Movie>();
  // @Output() onVoted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  onMovieClick() {

    this.movieEdited.emit(this.movie);
  }
}
