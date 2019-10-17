// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UploadImageService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Image } from '../server/models/upload_image';
@Injectable()
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  imageUrl = `${environment.apiUrl}/dashboard`;
  constructor(
    private http: HttpClient
  ) { }
 
  // public onUpload(img: Image): Observable<Image> {
  //   return this.http
  //     .post<Image>(this.imageUrl + '/Upload_Image', { data: img });   
  // }
  
  public onUpload(selectedFile:any){
    console.log("hello")
    const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name)
    // console.log(this.selectedFile.name)
    fd.append('image', selectedFile,selectedFile.name)
    console.log("selected file", selectedFile)
    //console.log(this.selectedFile.name)
    console.log("upload image works")
    // this.http.post('mongodb://127.0.0.1:27017/dashboard/demo', fd)
    // .subscribe(res=>{
    //   console.log(res);
    // });
    this.http.post<Image>(this.imageUrl + '/Upload_Image', fd)
    .subscribe(res=>{
      console.log(res);
    });
     console.log("my form data is",fd)
    // this.http.post('http://localhost:3000/UploadFile', fd)
    // .subscribe(res=>{
    //   console.log(res);
    // });

  }
}




// angular.module('travelDiary.destinationDetails').service('DestinationDetailsService', DestinationDetailsService);

// DestinationDetailsService.$inject = ['$http', 'Upload'];

// function DestinationDetailsService ($http, Upload) {

//   var DestinationDetailsService = {
//     setDestinationImage : setDestinationImage
//   };

//   function setDestinationImage(id, name, description, file) {
//     Upload.upload({
//             method: 'POST',
//             url: `/api/destinations/${id}`,
//             data: {
//               name: name,
//               description: description,
//               file: file
//             }
//         }).then(function (resp) {
//             console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
//         }, function (resp) {
//             console.log('Error status: ' + resp.status);
//         }, function (evt) {
//             var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//             console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
//         });
//   }

//   return DestinationDetailsService;
// }
