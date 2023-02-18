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

  public stockForm: FormGroup;
  public stocks: Stock[];
  public stocksSum: Stock[];
  public testeStock: Stock[];
  modalRef: BsModalRef;
  public requestType: string = 'post';
  public selectedStock: Stock;
  public total = [0, 1, 2, 3];


  /* var myApp = angular.module('myApp', ['angular.filter']); */


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


    this.testeStock = [
      {
        id: 1,
        ticker: 'CEMIG3',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 10,
      },
      {
        id: 2,
        ticker: 'WEG3',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 101,
      },
      {
        id: 3,
        ticker: 'CEMIG3',
        quantity: 4,
        averagePrice: 15,
        total: 25,
        currentQuote: 25,
        profit: 25,
      }
    ]
    this.stocksSum = this.loadingg();


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
        console.log(this.stocks);
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
    stock.id = 0; //Evitar que o id do form fique nulo, refatorar.
    console.log(stock);
    this.assetsService.post(stock).subscribe(
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

  selectStocks(stock: Stock){
    this.requestType = 'put';
    this.selectedStock = stock;
    /* this.stockForm.patchValue(stock); */
    this.stockForm.setValue(stock);

  }

  editStocks(stock: Stock) {
    this.assetsService.put(stock.id, stock).subscribe(
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

  deleteStocks(){
    this.assetsService.delete(this.selectedStock.id).subscribe(
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


/*   myApp.controller('MyController', function($scope) {
    $scope.data = [
      {Id:1,name:"harry",volume:500},
      {Id:1,name:"harry",volume:200},
      {Id:2,name:"Fred",volume:150},
      {Id:2,name:"Fred",volume:500},
      {Id:3,name:"Sally",volume:450},
      {Id:3,name:"Sally",volume:100}
    ]; */


    /* getVolumeSum = function(stocks) {
      return stocks
      .map(function(x) { return x.ticker; })
      .reduce(function(a, b) { return a + b; });
    }; */


      loadingg(): Stock[] {
      return this.testeStock.reduce((result: any, curr: Stock) => {
        const objInStock = result.find((o: any) => o.ticker === curr.ticker);
        if (objInStock)
          {
            objInStock.quantity += curr.quantity;
            objInStock.averagePrice += curr.averagePrice;
            objInStock.total += curr.total;
            objInStock.currentQuote += curr.currentQuote;
            objInStock.profit += curr.profit;
          }
        else
          {
            result.push(curr);
          }
        return result;
      }

      ,[]);


    }

/*     loadingg() {

    } */


}
