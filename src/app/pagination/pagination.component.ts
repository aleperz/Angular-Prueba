import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  page(pageNumber: string) {
    this.pageSelected.emit(pageNumber);
  }
}
