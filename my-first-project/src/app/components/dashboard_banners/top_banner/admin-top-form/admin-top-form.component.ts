import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TopBannerService } from '../../../../services/top-banner.service';
import { Top_banner } from 'src/app/server/models/top_banner.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-top-form',
  templateUrl: './admin-top-form.component.html',
  styleUrls: ['./admin-top-form.component.css']
})
export class AdminTopFormComponent{

  @Input() post: Top_banner = {
    name:'',
    image:'',
    display_order:'',
    status:'',
    product_link:'',
    product_rating:'',
    link_type:''
  };
  @Input() isEditing = false;
  constructor(
    public TopBannerService: TopBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.TopBannerService.editTopBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    
      this.TopBannerService.addTopBanner(this.post).subscribe(() => {
        this.location.back();
      });
    }
  onCancelClick() {
    this.location.back();
    }

}
