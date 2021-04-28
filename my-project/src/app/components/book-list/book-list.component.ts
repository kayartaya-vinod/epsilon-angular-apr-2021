import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.books = [
      { id: 8947, title: 'Let us C', author: 'Yashwant Kanetkar', publisher: 'BPB', price: 199.0, available: true },
      { id: 3832, title: 'C PEARLS', author: 'Yashwant Kanetkar', publisher: 'BPB', price: 249.0, available: true },
      { id: 3646, title: 'java unleashed 2nd edition', author: 'John Doe', publisher: 'ACME', price: 495.0, available: false },
      { id: 4282, title: 'Unix handbook', author: 'Jane Doe', publisher: 'XYZPQR', price: 150.0, available: true },
    ];
  }

}
