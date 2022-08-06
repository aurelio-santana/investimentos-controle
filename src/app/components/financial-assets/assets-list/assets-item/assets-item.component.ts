import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-assets-item',
  templateUrl: './assets-item.component.html',
  styleUrls: ['./assets-item.component.css']
})
export class AssetsItemComponent implements OnInit {

  @Input()
  stock!: Stock;
  constructor() { }

  ngOnInit(): void {
  }

}
