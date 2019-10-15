import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MiddleBannerService } from '../../../../services/middle-banner.service';
import { Middle_banner } from 'src/app/server/models/middle_banner.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-middle-form',
  templateUrl: './admin-middle-form.component.html',
  styleUrls: ['./admin-middle-form.component.css']
})
export class AdminMiddleFormComponent{

  @Input() post: Middle_banner = {
    name:'',
    brand_link:'',
    image:'',
    display_order:'',
    status:''
  };
  @Input() isEditing = false;
  constructor(
    public middleBannerService: MiddleBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.middleBannerService.editMiddleBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    
      this.middleBannerService.addMiddleBanner(this.post).subscribe(() => {
        this.location.back();
      });
    }
  onCancelClick() {
    this.location.back();
    }
    
}


