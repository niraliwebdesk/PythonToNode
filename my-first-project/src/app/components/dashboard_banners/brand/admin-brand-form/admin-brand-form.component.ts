import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../../services/brand.service';
import { Brands } from 'src/app/server/models/brands.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-brand-form',
  templateUrl: './admin-brand-form.component.html',
  styleUrls: ['./admin-brand-form.component.css']
})
export class AdminBrandFormComponent{
  selectedFile: any = null
  public imagepath;
  imgURL:any;
  brandForm: FormGroup;
  @Input() post: Brands = {
    name:'',
    brand_link:'',
    //image:'',
    display_order:'',
    status:'',
    imageid:''
  };
  @Input() isEditing = false;
  constructor(
    public brandService: BrandService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { this.brandForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.min(1),Validators.max(15)]),
    brand_link: new FormControl('',Validators.required ),
    display_order: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    image: new FormControl(''),
    imageid: new FormControl('')    
});}
  onSubmit() {
    if (this.isEditing) {
      const id = this.route.snapshot.params['id'];
      this.brandService.editBrand(id, this.post).subscribe(() => {
        console.log("this.post  :::  ",this.post)
        this.location.back();
        
      });
      return;
    } 
    this.brandService
    .onUpload(this.selectedFile, this.post)
    .then(data=>{  
        
        console.log("helloooo",data)
    }).catch(error=>{
        console.log(error,"error occur")
    })
    this.location.back()
      // this.brandService.addBrand(this.post).subscribe(() => {
      //   this.location.back();
      //});
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
       this.brandService.onUpload(this.selectedFile, this.post)    
    }
    
  
}
