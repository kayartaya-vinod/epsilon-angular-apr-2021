import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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

  confirmAndDelete(): void {
    if (window.confirm('Are you sure to delete this?')) {
      this.service.deleteProduct(this.product._id)
        .subscribe(() => this.router.navigate(['/product-list']));
    }
  }

}
