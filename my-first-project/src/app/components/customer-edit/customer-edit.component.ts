import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/server/models/user.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  post: Customer;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private postService: CustomerService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getCustomerById(id)
      .subscribe((post: Customer) => {
        this.post = post;
        this.originalTitle = String(post.first_name);
      });
  }
}
