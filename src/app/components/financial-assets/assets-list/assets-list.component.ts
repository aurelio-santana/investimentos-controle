import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { AssetsService } from './assets.service';
import { Stock } from './model/Stock';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  public title = 'Carteira';
  public stockForm: FormGroup;
  public stocks: Stock[];
  public stocksSum: Stock[];
  public testeStock: Stock[];
  modalRef: BsModalRef;
  public requestType: string = 'post';
  public selectedStock: Stock;
  public total = [0, 1, 2, 3];



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, //Formulários
              private modalService: BsModalService, //Popup
              private assetsService : AssetsService) {
    this.createForm();
  }

  ngOnInit() {

    this.loadStocks();
  }

  createForm()
  {
    this.stockForm = this.fb.group({
      id: [0],
      ticker: [''],
      quantity: [],
      averagePrice: [],
      total: [],
      currentQuote: [],
      profit: []
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

  loadStocks()
  {
    this.assetsService.getStock().subscribe(

      (stocks: Stock[]) => {
        this.stocks = stocks;
        console.log("loadStocks: ", this.stocks);
        this.stocksSum = this.loadingg();
      },
      (erro:any) => {
        console.error(erro);
      }
    );
  }

  setMode(){
    this.requestType = 'post';
  }

  addStocks(stock: Stock) {
    stock.id = 0; //Evitar que o id do form fique nulo. Refatorar.
    console.log(stock);
    this.assetsService.post(stock).subscribe(
      (retorno: Stock) => {
        console.log("addStocks: ", retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  selectStocks(stock: Stock){
    this.requestType = 'put';
    this.selectedStock = stock;
    this.stockForm.patchValue(stock);
  }

  editStocks(stock: Stock) {
    this.assetsService.put(stock.id, stock).subscribe(
      (retorno: Stock) => {
        console.log("editStocks: ", retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
    this.requestType = 'post';
  }

  deleteStocks(){
    this.assetsService.delete(this.selectedStock.id).subscribe(
      (retorno: Stock) => {
        console.log("deleteStocks: ",retorno);
        this.stockForm.reset();
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  loadingg() { //Refatorar nome

    return this.stocks.reduce((result: any, curr: Stock) => {
      const objInStock = result.find((o: any) => o.ticker === curr.ticker);
      if (objInStock)
        {

          console.log("ob avprice, cu avprice, ob qt, cu qt: ", objInStock.averagePrice, curr.averagePrice, objInStock.quantity, curr.quantity);

          //averagePrice precisa ser cálculado antes de quantity para não gerar erro nos cálculos
          objInStock.averagePrice =
            (objInStock.averagePrice * objInStock.quantity + curr.averagePrice * curr.quantity) /
            (objInStock.quantity + curr.quantity);

          objInStock.quantity += curr.quantity;
          /* objInStock.averagePrice += curr.averagePrice; */

          /* objInStock.total += curr.total; */
          objInStock.total = objInStock.quantity * objInStock.averagePrice;

          objInStock.currentQuote += curr.currentQuote;

          /* objInStock.profit += curr.profit; */
          objInStock.profit = objInStock.total - objInStock.quantity * objInStock.currentQuote;

          /* Correção. Corrigir calculo do preço medio e total*/
          /* Correção. Corrigir calculo da cotação atual usando API de consulta de cotações */


        }
      else
        {
          result.push(curr);
        }
      console.log("loadingg if: ", result);
      return result;

    },[]);
  }

}


