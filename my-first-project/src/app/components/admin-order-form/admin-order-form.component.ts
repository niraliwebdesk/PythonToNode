import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/server/models/order.model';

@Component({
  selector: 'app-admin-order-form',
  templateUrl: './admin-order-form.component.html',
  styleUrls: ['./admin-order-form.component.css']
})
export class AdminOrderFormComponent{
  
  @Input() post: Order = {
    order_id : '',
    customer_name : '',
    customer_id : ''
  };
  @Input() isEditing = false;
  constructor(
    private OrdererService: OrderService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.OrdererService.editOrder(id, this.post).subscribe(() => {
        this.location.back();
      });
      return;
    } 
      this.OrdererService.addOrder(this.post).subscribe(() => {
        this.location.back();
      });
    }
    onCancelClick() {
      this.location.back();
    }
}
