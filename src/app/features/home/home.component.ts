import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideNavbar = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

    this.hideNavbar.emit();
  }

}
