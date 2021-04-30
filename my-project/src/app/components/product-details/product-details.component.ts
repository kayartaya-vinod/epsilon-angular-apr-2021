import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any = {};

  constructor(private service: ProductService,
    private activatedRoute: ActivatedRoute) { }

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

}
