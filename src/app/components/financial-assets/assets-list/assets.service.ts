import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Stock } from "./model/Stock";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";

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
  private url = `${environment.mainUrl}/api/Stock`;

  // httpOptions = {
  //   Headers: new HttpHeaders({'content-type': 'application/json'})
  // }


  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]>
  //.get retorna um Observable e a API retorna um array de Aluno
  {
    return this.http.get<Stock[]>(this.url);
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

  getStocksByTicker(ticker: string): Observable<Stock>
  {
    return this.http.get<Stock>(`${this.url}/${ticker}`);
  }

  post(stock: Stock) {
    return this.http.post<Stock>(`${this.url}`, stock, httpOptions);
    //return this.http.post<Stock>(`${this.url}`, stock); //verificar
  }

  put(id: number, stock: Stock) {
    return this.http.put<Stock>(`${this.url}/${id}`, stock, httpOptions);
  }

  delete(id: number) {
    return this.http.delete<Stock>(`${this.url}/${id}`);
  }



}

