import { Component, OnInit } from '@angular/core';
import { TopBannerService } from '../../../../services/top-banner.service';
import { Top_banner } from 'src/app/server/models/top_banner.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent{
  returned_val: any;
  topbannerList: Top_banner[];
  constructor(
    private topBannerService: TopBannerService,
    private location: Location,

  ) { 
    topBannerService.getTopBanner()
      .subscribe((customer: Top_banner[]) => {
        this.topbannerList = customer;
      });
  }
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.topBannerService.deleteTopBanner(id)
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
