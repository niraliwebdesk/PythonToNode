import { Component, OnInit } from '@angular/core';
import {Order} from 'src/app/server/models/order.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent{
  customer: Order;
  constructor(
    private route: ActivatedRoute,
    private customerService: OrderService,
  ) { 
    const id = route.snapshot.params['id'];
  customerService.getOrderById(id)
    .subscribe((customer: Order) => {
      this.customer = customer;
      //this.pageTitleService.changeTitle(this.customer.title);
    });
  }

  
}
