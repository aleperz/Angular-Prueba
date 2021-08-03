import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-option',
  templateUrl: './aside-option.component.html',
  styleUrls: ['./aside-option.component.css'],
})
export class AsideOptionComponent implements OnInit {
  @Input() urlImg: string = '';
  @Input() txt: string = '';

  constructor() {}

  ngOnInit(): void {}
}
