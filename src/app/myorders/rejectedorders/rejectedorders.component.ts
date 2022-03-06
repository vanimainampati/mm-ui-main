import { Component, OnInit } from '@angular/core';
import { MyordersService } from 'src/app/services/myorders.service';

@Component({
  selector: 'app-rejectedorders',
  templateUrl: './rejectedorders.component.html',
  styleUrls: ['./rejectedorders.component.css']
})
export class RejectedordersComponent implements OnInit {

  // @ts-ignore
  public orderedProducts: Ordersummary[];

  // @ts-ignore
  items: MenuItem[];


  // @ts-ignore
  activeItem: MenuItem;

  constructor(private myordersservice: MyordersService) {
  }

  ngOnInit(): void {
    this.items = [
      {label: "PendingOrders", routerLink: ['/pendingorders']},
      {label: "RecivedOrders", routerLink: ['/recivedorders']},
      {label: "RejectedOrders", routerLink: ['/rejectedorders']}
    ];
    this.activeItem = this.items[2];
    // @ts-ignore
    this.myordersservice.findAllRejectedOrders().subscribe(data => {
      this.orderedProducts = data;
    })

  } 

}
