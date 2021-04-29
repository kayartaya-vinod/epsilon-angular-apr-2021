import { Injectable } from '@angular/core';
import { contacts } from 'src/app/contacts'
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root' // this service has automatically become part of the root module (AppModule)
})
export class ContactService {

  private contacts: Array<Contact>;

  constructor() {
    console.log('ContactService instnatiated!');
    this.contacts = [...contacts];
  }

  // each time you call this function, you get next 10 records
  public getContacts(): Array<Contact> {

    if (this.contacts.length <= 10) {
      return this.contacts.splice(0, this.contacts.length);
    }
    return this.contacts.splice(0, 10);
  }
}
