import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  active: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setActive(active: string): void {
    this.active = active;
  }

}
