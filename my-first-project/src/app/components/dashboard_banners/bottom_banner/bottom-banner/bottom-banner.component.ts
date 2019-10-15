import { Component } from '@angular/core';
import { BottomBannerService } from '../../../../services/bottom-banner.service';
import { BottomBar } from 'src/app/server/models/bottom_bar.model';
import { Location } from '@angular/common';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.css']
})
export class BottomBannerComponent {
  bottomBannerList: BottomBar[];
  returned_val : any;
  constructor(
    private bottomBannerService: BottomBannerService,
    private location: Location,

  ) {
    bottomBannerService.getBottomBanner()
      .subscribe((customer: BottomBar[]) => {
        this.bottomBannerList = customer;
      });
  }
  
  onDeleteClick(id) {
    this.returned_val = confirm("Are you sure you want to delete? this operation can't be reverted");
    if (this.returned_val == true){
      this.bottomBannerService.deleteBottomBanner(id)
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
