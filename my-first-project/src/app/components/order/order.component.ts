import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/server/models/order.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  returned_val:any;
  orderList: Order[];
  constructor(
    private OrderService: OrderService,
    private location: Location

  ) {
    OrderService.getOrders()
      .subscribe((order: Order[]) => {
        this.orderList = order;
      });
  }
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.OrderService.deleteOrder(id)
      .subscribe(() => {
        // this.location.go('/customer')
        window.location.reload()
      });

    }
    else{
      window.location.hash
    }
    
  }

}
