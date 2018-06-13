import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-hello-rx',
  templateUrl: './hello-rx.component.html',
  styleUrls: ['./hello-rx.component.css']
})
export class HelloRxComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  //  Observable.of(1, 2, 3).map(x => x + '!!!'); // etc

  }

}
