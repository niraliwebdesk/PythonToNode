import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/server/models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer.component.html'
})
export class CustomerListComponent {
  customerList: Customer[];
  returned_val : any;
  
  constructor(
    private CustomerService: CustomerService,
    private location: Location,
    
  ) {
    CustomerService.getCustomers()
      .subscribe((customer: Customer[]) => {
        this.customerList = customer;
      });
  }
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.CustomerService.deletePost(id)
      .subscribe(() => {
        // this.location.go('/customer')
        window.location.reload()
      });

    }
    else{
      window.location.hash
    }
    
  }
  toggleEditable(event,check:any) {
    var id_Arr = []
    if ( event.target.checked ) 
    {
      id_Arr.push(check)
       console.log("checked, check :: ",check)
       console.log(id_Arr);
       return check;
   }
   else{
    console.log("no checked")
    
   }
   
   
}
 
}
