import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Products } from '../products.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  @Input() pagesQuantity: Products[] = [];
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.pagesQuantity.length);

    this.pages = [...Array(Math.ceil(this.pagesQuantity.length / 4)).keys()];
    console.log(this.pages);
  }

  page(pageNumber: number) {
    this.pageSelected.emit(String(pageNumber));
  }
}
