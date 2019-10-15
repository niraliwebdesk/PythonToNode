import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BottomBannerService } from '../../../../services/bottom-banner.service';
import { BottomBar } from 'src/app/server/models/bottom_bar.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-bottom-form',
  templateUrl: './admin-bottom-form.component.html',
  styleUrls: ['./admin-bottom-form.component.css']
})
export class AdminBottomFormComponent{
  selectedFile: File = null
  @Input() post: BottomBar = {
    name:'',
    collection_link:'',
    image:'',
    display_order:'',
    status:'',
    link_type:'',
  };
  @Input() isEditing = false;
  constructor(
    public bottomBannerService: BottomBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.bottomBannerService.editBottomBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    
      this.bottomBannerService.addBottomBanner(this.post).subscribe(() => {
        this.location.back();
      });
    }
  onCancelClick() {
    this.location.back();
    }
    onFileSelected(event){
      console.log("file uploadd", event)
      this.selectedFile = <File>event.target.files[0]
    }
    

    

}
