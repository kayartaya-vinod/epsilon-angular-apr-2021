import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: any = {};

  constructor(private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.service.getOneProduct(routeParams['id'])
        .subscribe(
          data => this.product = data,
          console.error, // subscribe will invoke console.error by passing err object
          () => console.log('subscription ended!')
        );
    });
  }

  save(): void {
    this.service.updateProduct(this.product)
      .subscribe(
        resp => {
          console.log('resp is', resp);
          this.router.navigate(['/product-details', resp._id]);
        },
        console.error);
  }

}
