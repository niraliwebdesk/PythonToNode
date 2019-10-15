import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../../services/brand.service';
import { Brands } from 'src/app/server/models/brands.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-brand-form',
  templateUrl: './admin-brand-form.component.html',
  styleUrls: ['./admin-brand-form.component.css']
})
export class AdminBrandFormComponent{

  @Input() post: Brands = {
    name:'',
    brand_link:'',
    image:'',
    display_order:'',
    status:''
  };
  @Input() isEditing = false;
  constructor(
    public brandService: BrandService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.brandService.editBrand(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    
      this.brandService.addBrand(this.post).subscribe(() => {
        this.location.back();
      });
    }
  onCancelClick() {
    this.location.back();
    }
    
  
}
