import {Component, OnInit} from '@angular/core';
import {Requester} from "../../Model/Requester";
import {ActivatedRoute} from "@angular/router";
import {MenuItem} from 'primeng/api';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-requesterdetails',
  templateUrl: './requesterdetails.component.html',
  styleUrls: ['./requesterdetails.component.css']
})
export class RequesterdetailsComponent implements OnInit {


  // @ts-ignore
  orders: Orders[];
  // @ts-ignore
  requests: Requester;
  // requestedon: any;
  // requestdept: any;
  // line: any;
  // requestby: any;
  // requestsec: any;
  // drive: any;
  // ordertype: any;
  // requesterparsed: any;
  events: any[] = [];
  reqnbr: string = "";
  // @ts-ignore
  activeIndex: number;
  // @ts-ignore
  items: MenuItem[];
  // public counts = ["My Orders", "Shift in Charge", "Admin in Charge", "Received"];
  // public orderStatus = "My Orders";

  constructor(private orderservice: MaterialService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.items = [
      {label: "My Orders"},
      {label: "Shift in Charge"},
      {label: "Admin in Charge"},
      {label: "Received"}
    ];
    this.activeIndex = 0;
    // @ts-ignore
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('reqnbr');
      this.reqnbr = id;

    });

    this.getRequestDetails(this.reqnbr);
    this.getOrders(this.reqnbr);

    this.events = [
      {status: 'A', color: '#000000', content: 'My Orders'},
      {status: 'P', color: '#673AB7', content: 'Shift in Charge'},
      {status: 'P', color: '#FF9800', content: 'Admin in Charge'},
      {status: 'P', color: '#607D8B', content: 'Received'}
    ];

  }

  private getOrders(reqnbr: string) {
    this.orderservice.getMaterials(reqnbr).subscribe((items) => {

        this.orders = items;

        console.log(this.orders)
      }
    );
  }


  private getRequestDetails(reqnbr: string) {
    this.orderservice.getRDetails(reqnbr).subscribe((items) => {

      // @ts-ignore
      this.requests = items;

      // this.requesterparsed = JSON.parse(this.items)
      console.log(items)
    });
  }

  acknowledge() {
    this.activeIndex = 1;
    this.orderservice.updatestatustoRecived(this.reqnbr).subscribe(data => {
      console.log("updated" + data)
    });
  }

}
