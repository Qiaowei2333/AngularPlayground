import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSave(x) {
    console.log('save clicked!');
    console.log(x);
    x.stopPropagation();
   // will stop event bubbling going up DOM tree

  }
  onClick()
  {
    console.log('DIV Clicked')
  }
}
