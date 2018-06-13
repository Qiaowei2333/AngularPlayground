import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-hello-rx',
  templateUrl: './hello-rx.component.html',
  styleUrls: ['./hello-rx.component.css']
})
export class HelloRxComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const test = of(1, 2, 3).map(x =>  x + '!!!');
    test.subscribe( x =>  console.log(x));

    const nums = of(1, 2, 3);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(x => console.log(x));

  }

}
