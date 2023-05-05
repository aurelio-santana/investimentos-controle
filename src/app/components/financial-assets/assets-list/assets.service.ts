import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Stock } from "./model/Stock";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { Reit } from "./model/Reit";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AssetsService {


  //private url = 'https://localhost:7268/api/investControl';
  private urlStock = `${environment.mainUrl}/api/Stock`;
  private urlReit = `${environment.mainUrl}/api/Reit`;

  // httpOptions = {
  //   Headers: new HttpHeaders({'content-type': 'application/json'})
  // }


  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]>
  //.get retorna um Observable e a API retorna um array de Stock
  {
    return this.http.get<Stock[]>(this.urlStock);
    //Ao tipar a chamada do método, é necessário tipar o retorno também <>
  }

  getAllStocks(): Observable<Stock[]>
  {
    return this.http.get<Stock[]>(`${this.urlStock}`);
  }

  getStocksById(id: number): Observable<Stock>
  //a API retorna apenas uma única Stock
  {
    return this.http.get<Stock>(`${this.urlStock}/${id}`);
  }

  getStocksByTicker(ticker: string): Observable<Stock>
  {
    return this.http.get<Stock>(`${this.urlStock}/${ticker}`);
  }

  postStock(stock: Stock) {
    return this.http.post<Stock>(`${this.urlStock}`, stock, httpOptions);
    //return this.http.post<Stock>(`${this.urlStock}`, stock); //verificar
  }

  putStock(id: number, stock: Stock) {
    return this.http.put<Stock>(`${this.urlStock}/${id}`, stock, httpOptions);
  }

  deleteStock(id: number) {
    return this.http.delete<Stock>(`${this.urlStock}/${id}`);
  }


  /** Reit **/

  getReit(): Observable<Reit[]>
  {
    return this.http.get<Reit[]>(this.urlReit);
  }

  getAllReits(): Observable<Reit[]>
  {
    return this.http.get<Reit[]>(`${this.urlReit}`);
  }

  getReitsById(id: number): Observable<Reit>
  {
    return this.http.get<Reit>(`${this.urlReit}/${id}`);
  }

  getReitsByTicker(ticker: string): Observable<Reit>
  {
    return this.http.get<Reit>(`${this.urlReit}/${ticker}`);
  }

  postReit(reit: Reit) {
    return this.http.post<Reit>(`${this.urlReit}`, reit, httpOptions);
  }

  putReit(id: number, reit: Reit) {
    return this.http.put<Reit>(`${this.urlReit}/${id}`, reit, httpOptions);
  }

  deleteReit(id: number) {
    return this.http.delete<Reit>(`${this.urlReit}/${id}`);
  }



}

