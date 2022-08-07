import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Stock } from "./model/stock";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {


  //private url = 'https://localhost:7268/api/investControl';
  private url = `${environment.mainUrl}/api/Stock`;

  // httpOptions = {
  //   Headers: new HttpHeaders({'content-type': 'application/json'})
  // }



  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]>
  //.get retorna um Observable e a API retorna um array de Aluno
  {
    return this.http.get<Stock[]>(this.url)
    //Ao tipar a chamada do método, é necessário tipar o retorno também <>
  }

  getAllStocks(): Observable<Stock[]>
  {
    return this.http.get<Stock[]>(`${this.url}`);
  }

  getStocksById(id: number): Observable<Stock>
  //a API retorna apenas uma única Stock
  {
    return this.http.get<Stock>(`${this.url}/${id}`);
  }

}



//--------------------- LOCAL

//   constructor(){}

//   getStock(){
//     return STOCK
//   }

// }

// var STOCK: Stock[] = [
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
