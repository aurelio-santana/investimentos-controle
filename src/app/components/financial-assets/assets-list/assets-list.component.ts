import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AssetsService } from './assets.service';
import { Stock } from './model/Stock';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  public stockForm: FormGroup;
  public stocks: Stock[];
  modalRef: BsModalRef;
  public requestType: string = 'post';
  public selectedStock: Stock;

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
        console.log(this.stocks);
      },
      (erro:any) => {
        console.error(erro);
      }
    );
  }

  addStocks(stock: Stock) {
    this.assetsService.post(stock).subscribe(
      (retorno: Stock) => {
        console.log(retorno);
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
        console.log(retorno);
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
        this.loadStocks();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  }


