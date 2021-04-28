import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent {

  linkTexts = ['Tiger', 'Lion', 'Cheetah', 'Eagle', 'Python', 'Panther', 'Zebra'];
  userChoice = 0;

  setUserChoice(choice: number): void {
    this.userChoice = choice;
  }
}
