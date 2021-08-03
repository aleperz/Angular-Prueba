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
  switchClass: boolean = true;
  available: string = 'Disponible';

  constructor() {}

  ngOnInit(): void {}

  switchFn() {
    this.switchClass = !this.switchClass;
    if (!this.switchClass) {
      this.available = 'No Disponible';
    } else {
      this.available = 'Disponible';
    }
  }
}
