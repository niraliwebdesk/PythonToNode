import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Uploader }      from 'angular2-http-file-upload';

import {HttpClient} from '@angular/common/http';
// import { MyUploadItem } from 'src/app/server/models/upload_image';
  import { from } from 'rxjs';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
   constructor(public uploadImageService: UploadImageService) { }
   selectedFile:any = null;
   onFileSelected(event){
     this.selectedFile = event.target.files[0];
     console.log("file selected::"+ (this.selectedFile.name));
   }
   onUpload(){
      console.log("API called") 
    //  this.uploadImageService.onUpload()
    //  const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name)
    // console.log(this.selectedFile.name)
    // console.log("upload image works")
    // this.http.post('mongodb://127.0.0.1:27017/dashboard/demo', fd)
    // .subscribe(res=>{
    //   console.log(res);
    // });
    this.uploadImageService.onUpload(this.selectedFile)    
   }

  ngOnInit() {
  }

}
