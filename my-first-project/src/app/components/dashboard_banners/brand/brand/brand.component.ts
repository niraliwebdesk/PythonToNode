import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../../services/brand.service';
import { Brands } from 'src/app/server/models/brands.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent{
  returned_val : any;
  middleBannerList: Brands[];
  constructor(
    private brandService: BrandService,
    private location: Location,

  ) { 
    brandService.getBrand()
      .subscribe((customer: Brands[]) => {
        this.middleBannerList = customer;
      });
  }
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.brandService.deleteBrand(id)
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
