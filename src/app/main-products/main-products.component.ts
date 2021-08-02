import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  AbstractControl,
} from '@angular/forms';

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
  form!: FormGroup;
  check: boolean = false;

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.getProducts('1');
    this.form = new FormGroup({
      isArray: new FormArray([]),
    });
  }

  selectAll(event: any) {
    this.products.forEach(
      (product) => (product.checked = event.target.checked)
    );
  }

  onCbChange(e: Event) {
    const isArray: FormArray = this.form.get('isArray') as FormArray;
    const checkboxElement = e.target as HTMLInputElement;
    console.log(checkboxElement.value);

    if (checkboxElement.checked) {
      isArray.push(new FormControl(checkboxElement.value));
    } else {
      isArray.controls.forEach((item: AbstractControl, index: number) => {
        if (item.value == checkboxElement.value) {
          isArray.removeAt(index);
          return;
        }
      });
    }
    //this.form.value.multiple
    console.log(this.form.value.isArray);
  }

  getProducts(pageNumber: string, sort?: string, order?: string) {
    this.productService
      .getProducts(pageNumber, sort, order)
      .subscribe((data) => {
        this.products = data;
        this.products.forEach((obj) => {
          obj.checked = false;
        });
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
