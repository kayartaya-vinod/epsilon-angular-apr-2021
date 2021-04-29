import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-filterable-contact-list',
  templateUrl: './filterable-contact-list.component.html',
  styleUrls: ['./filterable-contact-list.component.css']
})
export class FilterableContactListComponent implements OnInit {

  title: string = '<h2>Filterable Contact List</h2>';
  data: Array<any> = [];
  filterText: string;
  noMoreData: boolean = false;

  // by declaring a constructor parameter/argument as private/public/protected, TypeScript creates a 
  // new member variable inside this class, and assigns the value of the parameter to the newly created
  // member variable
  constructor(private cs: ContactService) {
    console.log('FilterableContactListComponent instantiated!', cs);
  }

  ngOnInit(): void {
    this.data = this.cs.getContacts();
  }

  loadMore(): void {
    const data = this.cs.getContacts();
    if (data.length == 0) {
      this.noMoreData = true;
    }
    this.data.push(...data);
  }

}
