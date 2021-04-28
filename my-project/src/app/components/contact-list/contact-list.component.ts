import { Component, OnInit } from '@angular/core';
import { contacts } from 'src/app/contacts';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  sizes = [5, 10, 25, 50, 100];
  size = this.sizes[0];
  contacts: Array<any>;
  showGenderColumn: boolean = true;
  showEmailColumn: boolean = true;
  showPhoneColumn: boolean = true;
  showCityColumn: boolean = true;

  fieldNameToSort: string = undefined;
  sortInReverse: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.contacts = contacts;
  }

  setSize(size: number): void {
    this.size = size;
  }

  setBgColorClass(gender: string): string {
    switch (gender) {
      case 'Male': return 'alert-success';
      case 'Female': return 'alert-danger';
      case 'Polygender': return 'alert-secondary';
      case 'Agender': return 'alert-info';
    }
  }

  getButtonClass(field: string): string {
    switch (field) {
      case 'gender': return this.showGenderColumn ? 'btn-primary' : 'btn-outline-primary';
      case 'email': return this.showEmailColumn ? 'btn-primary' : 'btn-outline-primary';
      case 'phone': return this.showPhoneColumn ? 'btn-primary' : 'btn-outline-primary';
      case 'city': return this.showCityColumn ? 'btn-primary' : 'btn-outline-primary';
    }
  }

  sortByField(fieldName: string): void {
    this.fieldNameToSort = fieldName;
    this.sortInReverse = !this.sortInReverse;
  }

}
