import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AssetsService } from '../assets.service';
import { Stock } from '../model/Stock';


@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css']
})
export class OperationsListComponent implements OnInit {

  public title = 'Ações';
  public stockForm: FormGroup;
  public stocks: Stock[];
  public testeStock: Stock[];
  modalRef: BsModalRef;
  public requestType: string = 'post';
  public selectedStock: Stock;


/*   favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']; */

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, //Formulários
    private modalService: BsModalService, //Popup
    private assetsService: AssetsService) {
    this.createForm();
  }

  ngOnInit() {

    this.loadStocks();

    /* this.testeStock = [
      {
        id: 1,
        ticker: 'CEMIG3',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 10,

        orderType: 1,
        date: new Date(1, 1, 2001)
      },
      {
        id: 2,
        ticker: 'WEG3',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 101,

        orderType: 1,
        date: new Date(1, 1, 2001)
      },
      {
        id: 3,
        ticker: 'CEMIG3',
        quantity: 4,
        averagePrice: 15,
        total: 25,
        currentQuote: 25,
        profit: 25,

        orderType: 1,
        date: new Date(1, 1, 2001)
      }
    ] */
  }

  createForm() {
    this.stockForm = this.fb.group({
      id: [0],
      ticker: [''],
      quantity: [],
      averagePrice: [],
      total: [],
      currentQuote: [],
      profit: [],

      orderType: [],
      date: []
    });
  }

  submitForm() {
    if (this.requestType == 'post')
      this.addStocks(this.stockForm.value)
    else if (this.requestType == 'put')
      this.editStocks(this.stockForm.value)
    else
      console.log("Tipo de requisição (requestType) inválido!");
  }

  loadStocks() {
    this.assetsService.getStock().subscribe(
      (stocks: Stock[]) => {
        this.stocks = stocks;
        console.log(this.stocks);
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  setMode() {
    this.requestType = 'post';
  }

  addStocks(stock: Stock) {
    stock.id = 0; //Evitar que o id do form fique nulo, refatorar.
    console.log(stock);
    this.assetsService.postStock(stock).subscribe(
      (retorno: Stock) => {
        console.log(retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  selectStocks(stock: Stock) {
    this.requestType = 'put';
    this.selectedStock = stock;
    /* this.stockForm.patchValue(stock); */
    this.stockForm.setValue(stock);
  }

  editStocks(stock: Stock) {
    this.assetsService.putStock(stock.id, stock).subscribe(
      (retorno: Stock) => {
        console.log(retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
    this.requestType = 'post';
  }

  deleteStocks() {
    this.assetsService.deleteStock(this.selectedStock.id).subscribe(
      (retorno: Stock) => {
        console.log(retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  /* getPriceByTicker(ticker: String) {



    var price = fetchPrice(ticker);
    console.log(price)
    return price;


    } */


/*   getPriceByTicker(ticker: String) {
    let price = this.handleGetPriceByTicker(ticker).then((result) => {
      console.log("Aqui o preço: ", result);
      return result;
    })
    return price
    console.log("teste")
    //console.log("Aqui o preço: ", 10);
    //return 10;
  } */

/*   handleGetPriceByTicker = (ticker: String) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error('deu error fi'))
        }

        let price = this.fetchPrice(ticker)
        resolve(price)
    })
  } */

  fetchPrice(acoes: Stock[]) {
    /* try {
      //const response = await fetch(`https://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/`+ticker);
      //const data = await response.json();
      //console.log("Success: ", ticker, data.Trad[0].scty.SctyQtn.curPrc)
      //return data.Trad[0].scty.SctyQtn.curPrc;
      console.log("Success, ticker: ", ticker)
      return 1

    } catch (error) {
      console.log("Erro: ", error);
      console.log("Ticker não encontrado, valor 0.")
      return 0;
    } */
    return 0;
  }




}






