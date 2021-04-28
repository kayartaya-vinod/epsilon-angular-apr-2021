import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number;

  // Most of the times, we use constructor for dependency injection only
  // and not for any kind of data initialization
  constructor() {
    console.log('CounterComponent.constructor is executed');
  }

  // use this method for any kind of initialization
  ngOnInit(): void {
    console.log('CounterComponent.ngOnInit() is executed');
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
