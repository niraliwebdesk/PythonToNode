import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TopBannerService } from '../../../../services/top-banner.service';
import { Top_banner } from 'src/app/server/models/top_banner.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-top-form',
  templateUrl: './admin-top-form.component.html',
  styleUrls: ['./admin-top-form.component.css']
})
export class AdminTopFormComponent{
  selectedFile: any = null
  topForm: FormGroup;
  public imagepath;
  imgURL:any;
  @Input() post: Top_banner = {
    name:'',
    //image:'',
    display_order:'',
    status:'',
    product_link:'',
    product_rating:'',
    link_type:'',
    imageid:''
  };
  @Input() isEditing = false;
  constructor(
    public TopBannerService: TopBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { this.topForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.min(1),Validators.max(15)]),
    //brand_link: new FormControl('',Validators.required ),
    display_order: new FormControl('',Validators.required),
    product_link: new FormControl('',Validators.required),
    product_rating:new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    image: new FormControl(''),
    link_type:new FormControl('',Validators.required),
    imageid: new FormControl('')    
});}

  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.TopBannerService.editTopBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    
    this.TopBannerService
    .onUpload(this.selectedFile, this.post)
    .then(data=>{  
        
        console.log("helloooo",data)
    }).catch(error=>{
        console.log(error,"error occur")
    })
    this.location.back()
    }
  onCancelClick() {
    this.location.back();
    }
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      this.imagepath = this.selectedFile;
      reader.readAsDataURL(event.target.files[0]);
      //this.imgURL = window.URL.createObjectURL(this.selectedFile)
       reader.onload = (_event)=>{
         this.imgURL = reader.result;
       }
      console.log("file selected::"+ (this.selectedFile.name));
    }
    onUpload(){
       console.log("API called") 
       this.TopBannerService.onUpload(this.selectedFile, this.post)    
    }

}
