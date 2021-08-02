import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Products = {
    images: [],
    name: '',
    price: 0,
    sku: '',
    discount: 0,
    final_price: 0,
    stock: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
