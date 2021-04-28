import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {

  // only if @Input() is  used, we can supply a value from the parent
  // <app-contact-card [contact]="..."></app-contact-card>
  @Input()
  contact: any;

}
