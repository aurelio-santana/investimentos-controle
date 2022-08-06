import { Component, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';
import { Stock } from './model/stock';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  stocks: any;
  assetsService : AssetsService

  constructor( assetsService : AssetsService) {
    this.assetsService = assetsService;
  }

  ngOnInit(): void {

    // var stocks: Stock[] = [
    //   {
    //     id: 1,
    //     ticker: 'CEMIG3',
    //     quantity: 2,
    //     averagePrice: 10,
    //     total: 20,
    //     quote: 15,
    //     profit: 10,
    //   },
    //   {
    //     id: 2,
    //     ticker: 'WEG3',
    //     quantity: 2,
    //     averagePrice: 10,
    //     total: 20,
    //     quote: 15,
    //     profit: 10,
    //   },
    // ]
    // console.log(stocks);


    //--------------------- LOCAL
    // this.stocks = this.assetsService.getStock()
    // console.log(this.stocks)


    //--------------------- API BD
    this.stocks = this.assetsService.getStock().subscribe((data => {
      this.stocks = data;
      console.log(this.stocks);
    }))
  }

}
