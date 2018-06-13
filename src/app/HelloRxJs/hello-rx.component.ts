import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
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

    // const test = of(1, 2, 3).map(x =>  x + '!!!');
    // test.subscribe( x =>  console.log(x));

    // const nums = of(1, 2, 3);
    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);
    // squaredNums.subscribe(x => console.log(x));


    // const el = document.getElementById('jumbo');

    // // Create an Observable that will publish mouse movements
    // const mouseMoves = fromEvent(el, 'mousemove');

    // // Subscribe to start listening for mouse-move events
    // const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    //   // Log coords of mouse movements
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    //   // When the mouse is over the upper-left of the screen,
    //   // unsubscribe to stop listening for mouse movements
    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // });



  }

}
