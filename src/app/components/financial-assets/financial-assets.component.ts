import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-assets',
  templateUrl: './financial-assets.component.html',
  styleUrls: ['./financial-assets.component.css']
})
export class FinancialAssetsComponent implements OnInit {

  public title = 'Ações';

  constructor() { }

  ngOnInit(): void {
  }

}
