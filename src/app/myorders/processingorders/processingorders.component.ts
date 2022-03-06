import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyordersService} from 'src/app/services/myorders.service';

@Component({
  selector: 'app-processingorders',
  templateUrl: './processingorders.component.html',
  styleUrls: ['./processingorders.component.css']
})
export class ProcessingordersComponent implements OnInit {
// @ts-ignore
public orderedProducts: Ordersummary[];
// @ts-ignore
items: MenuItem[];
// @ts-ignore
reqnbr: string;
// @ts-ignore
activeItem: MenuItem;

constructor(private myordersservice: MyordersService, private router: Router, private route: ActivatedRoute) {
}

ngOnInit(): void {
  this.items = [
    {label: "PendingOrders", routerLink: ['/pendingorders']},
    {label: "RecivedOrders", routerLink: ['/recivedorders']},
    {label: "RejectedOrders", routerLink: ['/rejectedorders']}

  ];
  this.activeItem = this.items[0];
  // @ts-ignore
  this.myordersservice.findAllPendingOrders().subscribe(data => {
    console.log(data)
    this.orderedProducts = data;
  })

}

onSelect(order: any) {
  console.log("dsfasfad")
  this.router.navigate(['/req', order.id]);

}
}
