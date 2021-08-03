import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private productsService: ProductServiceService) {}

  ngOnInit(): void {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.productsService.searchProduct(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
