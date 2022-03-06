import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  // @ts-ignore
  items: MenuItem[];
  
  // @ts-ignore
  activeItem: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    
    this.items = [
      {label: "PendingOrders", routerLink: ['/pendingorders']},
      {label: "RecivedOrders", routerLink: ['/recivedorders']},
      {label: "RejectedOrders", routerLink: ['/rejectedorders']}
    ];
    // @ts-ignore

    this.activeItem = this.items[0];
  }


  getvalue() {
    // @ts-ignore
    console.log(this.items[0])
  }

}
