import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/server/models/user.model';

@Component({
  selector: 'app-admin-post-form',
  templateUrl: './admin-post-form.component.html'
})
export class AdminPostFormComponent {
  @Input() post: Customer = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    image:''
  };
  @Input() isEditing = false;
  
  
  constructor(
    private CustomerService: CustomerService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }
   
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.CustomerService.editPost(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
      this.CustomerService.addCustomers(this.post).subscribe(() => {
        this.location.back();
      });
    }
    onCancelClick() {
      this.location.back();
    }
    
    
}