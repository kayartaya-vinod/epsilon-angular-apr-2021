import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

// const swal = window['swal'];

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: any = {};

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.service.addNewProduct(this.product)
      .subscribe(newProd => {
        // swal('Product data saved', `ID genderated is ${newProd.id}`, 'success');
        window.alert(`New product saved with id ${newProd.id}`);
        this.product = {};
      });
  }

}
