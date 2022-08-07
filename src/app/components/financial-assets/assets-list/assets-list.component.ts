import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssetsService } from './assets.service';
import { Stock } from './model/stock';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  public stockForm: FormGroup;

  public stocks: Stock[];


  constructor(private fb: FormBuilder, //Formulários
              //private modalService: BsModalService,
              private assetsService : AssetsService) {
    this.createForm();
  }

  //ngOnInit(): void {
  ngOnInit() {
    this.loadStocks();
  }

  createForm()
  {
    this.stockForm = this.fb.group({
      ticker: [''],
      quantity: [],
      averagePrice: []

    });
  }

  loadStocks() {

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

    //--------------------- LOCAL
    // this.stocks = this.assetsService.getStock()
    // console.log(this.stocks)


    //--------------------- API BD
    // this.stocks = this.assetsService.getStock().subscribe((data => {
    //   this.stocks = data;
    //   console.log(this.stocks);
    // }))



  }


