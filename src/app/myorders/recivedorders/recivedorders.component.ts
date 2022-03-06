import { Component, OnInit } from '@angular/core';
import { MyordersService } from 'src/app/services/myorders.service';

@Component({
  selector: 'app-recivedorders',
  templateUrl: './recivedorders.component.html',
  styleUrls: ['./recivedorders.component.css']
})
export class RecivedordersComponent implements OnInit {

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
    this.activeItem = this.items[1];
    console.log("RecivedordersComponent")
    // @ts-ignore
    this.myordersservice.findAllReciivedOrders().subscribe(data => {
      this.orderedProducts = data;
    })

  }
}
