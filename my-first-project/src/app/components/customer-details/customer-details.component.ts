import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/server/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent{

  customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    //private pageTitleService: PageTitleService
  ) {
    const id = route.snapshot.params['id'];
    customerService.getCustomerById(id)
      .subscribe((customer: Customer) => {
        this.customer = customer;
        //this.pageTitleService.changeTitle(this.customer.title);
      });
  }

}
