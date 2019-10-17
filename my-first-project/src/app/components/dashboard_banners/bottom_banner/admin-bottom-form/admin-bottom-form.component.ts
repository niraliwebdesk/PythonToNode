import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BottomBannerService } from '../../../../services/bottom-banner.service';
import { BottomBar } from 'src/app/server/models/bottom_bar.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-bottom-form',
  templateUrl: './admin-bottom-form.component.html',
  styleUrls: ['./admin-bottom-form.component.css']
})
export class AdminBottomFormComponent{
  selectedFile: any = null
  public imagepath;
  imgURL:any;
  @Input() post: BottomBar = {
    name:'',
    collection_link:'',
    //path:'',
    display_order:'',
    status:'',
    link_type:'',
    imageid:''
  };
  @Input() isEditing = false;
  bottomForm: FormGroup;

  constructor(
    public bottomBannerService: BottomBannerService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {  
    this.bottomForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.min(1),Validators.max(15)]),
      image : new FormControl('',Validators.required),
    collection_link: new FormControl('',Validators.required ),
    //path: new FormControl(''),
    display_order: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    link_type: new FormControl('', Validators.required),
    imageid: new FormControl('')    
  });
}

  onSubmit() {
    if(!this.bottomForm.valid){
      console.warn("form is invalid");
      
      return;
    }
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.bottomBannerService.editBottomBanner(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();        
      });
      return;
    }

    this.bottomBannerService
        .onUpload(this.selectedFile, this.post)
        .then(data=>{  
            
            console.log("helloooo",data)
        }).catch(error=>{
            console.log(error,"error occur")
        })
        this.location.back()
      // this.bottomBannerService.addBottomBanner(this.post).subscribe(() => {
      //   this.location.back();

//      });
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
      this.bottomBannerService.onUpload(this.selectedFile, this.post)    
   }
}
