import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/server/models/order.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit{
  post: Order;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private postService: OrderService
  ) { }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getOrderById(id)
      .subscribe((post: Order) => {
        this.post = post;
        this.originalTitle = String(post.customer_name);
      });
  }

}
