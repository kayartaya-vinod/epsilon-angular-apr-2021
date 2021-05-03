import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.service.getAllProducts()
      .subscribe(
        data => this.products = data,
        err => console.error('There was an error: ', err),
        () => console.log('Nothing else to get!'));
  }

  confirmAndDelete(id: string): void {
    if (window.confirm('Are you sure to delete this?')) {
      this.service.deleteProduct(id)
        .subscribe(() => {
          const index = this.products.findIndex(p => p._id == id);
          this.products.splice(index, 1);
        });
    }
  }
}
