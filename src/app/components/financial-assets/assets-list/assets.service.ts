import { Injectable } from "@angular/core";
import { Stock } from "./model/stock";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

}

var STOCK: Stock[] = [
  {
    id: 1,
    ticker: 'CEMIG3',
    quantity: 2,
    averagePrice: 10,
    total: 20,
    quote: 15,
    profit: 10,
  },
  {
    id: 2,
    ticker: 'WEG3',
    quantity: 2,
    averagePrice: 10,
    total: 20,
    quote: 15,
    profit: 10,
  },
]
