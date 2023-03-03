import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideNavbar = new EventEmitter();


  constructor() { }

  ngOnInit(): void {


  this.hideNavbar.emit();

  }

  usernameLabelFocus() {
    document.getElementById("input-username")?.focus();
  }
  passwordLabelFocus() {
    document.getElementById("input-password")?.focus();
  }

  /* pocus(){
    //this.isFocused = 'pocus';
    console.log(this.isFocused);
  } */


}


