import { Component, OnInit } from '@angular/core';
import { MiddleBannerService } from '../../../../services/middle-banner.service';
import { Middle_banner } from 'src/app/server/models/middle_banner.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-middle-banner',
  templateUrl: './middle-banner.component.html',
  styleUrls: ['./middle-banner.component.css']
})
export class MiddleBannerComponent{
  returned_val: any;
  middleBannerList: Middle_banner[];
  constructor(
    private middleBannerService: MiddleBannerService,
    private location: Location,

  ) { 
    middleBannerService.getMiddleBanner()
      .subscribe((customer: Middle_banner[]) => {
        this.middleBannerList = customer;
      });
  }
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.middleBannerService.deleteMiddleBanner(id)
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
