import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MiddleBannerService } from '../../../../services/middle-banner.service';
import { Middle_banner } from 'src/app/server/models/middle_banner.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-middle-form',
  templateUrl: './admin-middle-form.component.html',
  styleUrls: ['./admin-middle-form.component.css']
})
export class AdminMiddleFormComponent{
  selectedFile: any = null
  middleForm: FormGroup
  public imagepath;
  imgURL:any;
  @Input() post: Middle_banner = {
    name:'',
    brand_link:'',
    //image:'',
    display_order:'',
    status:'',
    imageid:'',
    path:''
  };
  @Input() isEditing = false;
  constructor(
    public middleBannerService: MiddleBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.middleForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.min(1),Validators.max(15)]),
      //brand_link: new FormControl('',Validators.required ),
      display_order: new FormControl('',Validators.required),
      brand_link: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),
      image: new FormControl('', [Validators.required]),
      imageid: new FormControl(''),    
      path:new FormControl('')
  });
   }
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.middleBannerService.editMiddleBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    this.middleBannerService
    .onUpload(this.selectedFile, this.post)
    .then(data=>{  
        
        console.log("helloooo",data)
    }).catch(error=>{
        console.log(error,"error occur")
    })
    this.location.back()
      // this.middleBannerService.addMiddleBanner(this.post).subscribe(() => {
      //   this.location.back();
      // });
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
      console.log("img url is", this.imgURL)
      console.log("image path is", this.imagepath)
      console.log("file selected::"+ (this.selectedFile.name));
    }
    onUpload(){
       console.log("API called")       
       this.middleBannerService.onUpload(this.selectedFile, this.post)    
    }
    
}


