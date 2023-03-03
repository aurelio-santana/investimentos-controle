import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from './components/financial-assets/assets-list/model/Stock';
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showNav = false;
  title = 'investimentosControle';


  constructor(private router : Router){}


  redirect(){
    this.router.navigate(['/add']);
  }

  ngOnInit(): void {
    this.showNav = false;


    /* var stocks: Stock[] = [
      {
        id: 1,
        ticker: 'CEMIG3 front',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 10,

        orderType: 1,
        date: new Date(1,1,2001)
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
        date: new Date(1,1,2001)
      },
    ] */

  }

  /* subscribeToEmitter(componentRef: any){
    if (!(componentRef instanceof LoginComponent)){
      return;
    }
    const childLogin : LoginComponent = componentRef;
    childLogin.hideNavbar.subscribe( () => {
      console.log("passou aqui: ", this.showNav);
      this.showNav = true;
      console.log("escondeu nav: ", this.showNav);
    })
  } */

  subscribeToEmitter(componentRef: any){
    if (!(componentRef instanceof LoginComponent)){
      this.showNav = false;
      return;
    }
      console.log("passou aqui: ", this.showNav);
      this.showNav = true;
      console.log("escondeu nav: ", this.showNav);
  }

}

