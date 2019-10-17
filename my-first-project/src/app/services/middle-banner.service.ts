import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Middle_banner } from '../server/models/middle_banner.model';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MiddleBannerService {
  public imagePath:any;
  imgURL: any;
  middleBannerUrl = `${environment.apiUrl}/dashboard`;

  constructor(
    private http: HttpClient
  ) { }
  public getMiddleBanner(): Observable<Middle_banner[]> {
    return this.http
      .get(this.middleBannerUrl + '/MiddleBanner')
      .pipe(
        map(response => {
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as Middle_banner[];
        })
        , catchError(error => {
          console.warn('I got error : ', error);
          return of(null);
        }))
  }
  public getMiddleBannerById(id: string): Observable<Middle_banner> {
    var url = this.middleBannerUrl + '/MiddleBanner/' + id;
    return this.http
      .get(url)
      .pipe(map(response => {
        console.log('we got Middle_banner respone ; ' + JSON.stringify(response));
        return response['data'] as Middle_banner
      })
      );

  }
  public addMiddleBanner(post: Middle_banner): Observable<Middle_banner> {
    return this.http
      .post<Middle_banner>(this.middleBannerUrl + '/MiddleBanner/add', { data: post });
  }
  public deleteMiddleBanner(id: string): Observable<Middle_banner> {
    var url = this.middleBannerUrl + '/MiddleBanner/delete/' + id;
    return this.http
      .delete(url).pipe(map(response => {
        console.log('we got BottomBar respone ; ' + JSON.stringify(response));
        return response['data'] as Middle_banner
      })
      );
  }
  public editMiddleBanner(id: string, post: Middle_banner): Observable<Middle_banner> {
    var url = this.middleBannerUrl + '/MiddleBanner/update/' + id;
    return this.http
      .put<Middle_banner>(url, { data: post });
  }
  public onUpload(selectedFile:any, post:Middle_banner):Promise<any>{
    console.log("hello")
    
    return new Promise((resolve,error)=>{

    const fd = new FormData();
    fd.append('image', selectedFile,selectedFile.name)
    fd.append('name', name)
    console.log("fd is", fd)
    console.log('image name is ',selectedFile.name)
    console.log("selected file", selectedFile)
    console.log("upload image works")
    this.http.post<Middle_banner>(this.middleBannerUrl + '/MiddleBanner/add/image', fd)
    .subscribe((res:any)=>{
      console.log("my response is",res);
      if(res && res.id){
        post.imageid = res.id;
        // const pathes = res.path
        post.path = res.path;
        
      this.addMiddleBanner(post).toPromise().then(data=>{
        console.log("data of middle banner", data)
        resolve(data)
      }).catch(e=>{
          reject(e)
      });
    }else{
      reject({
        "error":"image id not found"
      })
    }
    },
    e=>{
      reject(e);
    });
     console.log("my form data is",fd)
    })
  }
}
