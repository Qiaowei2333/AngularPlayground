import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  bookname = "Hunger Games";
  constructor() { }

  ngOnInit() {
  }


  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was Pressed!');
      console.log($event.target.value);
    }
    //we can use target.value to get the value
    // console.log($event.target.value);
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
}
