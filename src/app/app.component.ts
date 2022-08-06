import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from './components/financial-assets/assets-list/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'investimentosControle';

  constructor(private router : Router){}

  redirect(){
    this.router.navigate(['/add']);
  }

  ngOnInit(): void {

    var stocks: Stock[] = [
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

  }


}

