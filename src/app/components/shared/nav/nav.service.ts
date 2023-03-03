import { Injectable, Input, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NavService implements OnInit {

  @Input() showNav: boolean = true;


ngOnInit(): void {
}

}
