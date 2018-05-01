import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movieName = 'Avengers 3';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('ENTER Key has been pressed!');
      // we can use target.value to get the value
      console.log($event.target.value);
    }
  }

  onKeyUpEnter($event) {
    console.log($event.target.value);
  }

  onKeyUpGetValueFromTemplate(templatevariable) {

    console.log(templatevariable);
  }

  onKeyUpGetPropertyValue(xxx) {
    console.log('property binding is one way, so no updated value');
    console.log(xxx);
  }
  onKeyUpTwoWayBinding(dddd) {
    console.log('ngmodel, banana in box is two way, so updated value is present');
    console.log(dddd);
  }
  onClick() {
    console.log('clicked!');
  }
}
