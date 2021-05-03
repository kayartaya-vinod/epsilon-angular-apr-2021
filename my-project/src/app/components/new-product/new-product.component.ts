import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

// const swal = window['swal'];

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  title: string = 'Enter new product details';
  product: any = {};

  constructor(private service: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.service.addNewProduct(this.product)
      .subscribe(newProd => {
        // swal('Product data saved', `ID genderated is ${newProd._id}`, 'success');
        window.alert(`New product saved with id ${newProd._id}`);
        this.router.navigate(['/product-details', newProd._id]);
      });
  }

}
