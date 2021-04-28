import { Component, OnInit } from '@angular/core';
import { contacts } from 'src/app/contacts';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css']
})
export class ContactsInfoComponent implements OnInit {

  contacts: Array<any>;
  selectedContact: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedContact = JSON.parse(localStorage.getItem('selectedContact'));
    this.contacts = contacts;
  }

  setSelectedContact(contact: any): void {
    this.selectedContact = contact;
    // localStorage.setItem('selectedContact', JSON.stringify(this.selectedContact));
    // localStorage['selectedContact'] = JSON.stringify(this.selectedContact);
    localStorage.selectedContact = JSON.stringify(this.selectedContact);
  }

}
