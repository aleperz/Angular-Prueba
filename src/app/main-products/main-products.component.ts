import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../product-service.service';
import { Products } from '../products.interface';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css'],
})
export class MainProductsComponent implements OnInit {
  products: Products[] = [];
  orderValue: string = 'a';

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.getProducts('1');
  }

  getProducts(pageNumber: string, sort?: string, order?: string) {
    this.productService
      .getProducts(pageNumber, sort, order)
      .subscribe((data) => {
        this.products = data;
        console.log(this.products);
      });
  }

  sortBy(sortValue: string, page: string = '1') {
    if (sortValue === 'a') {
      this.getProducts(page, 'name', 'asc');
    } else if (sortValue === 'z') {
      this.getProducts(page, 'name', 'desc');
    } else {
      this.getProducts(page, 'precio', 'asc');
    }
  }

  sortProducts(sortValue: string) {
    this.orderValue = sortValue;
    this.sortBy(this.orderValue);
  }

  page(pageNumber: string) {
    this.sortBy(this.orderValue, pageNumber);
  }
}
