import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router : Router){}

  // dropdown(index: number){
  //   this.router.navigate(['/add']);
  // }

  // redirectReit(index: number){
  //   this.router.navigate(['/add']);
  // }

  ngOnInit(): void {
  }


}
