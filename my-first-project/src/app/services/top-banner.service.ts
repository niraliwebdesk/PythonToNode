import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Top_banner } from '../server/models/top_banner.model';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class TopBannerService {
  topBannerUrl = `${environment.apiUrl}/dashboard`;

  constructor(
    private http: HttpClient
  ) { }
  public getTopBanner(): Observable<Top_banner[]> {
    return this.http
      .get(this.topBannerUrl + '/TopBanner')
      .pipe(
        map(response => {
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as Top_banner[];
        })
        , catchError(error => {
          console.warn('I got error : ', error);
          return of(null);
        }))
  }
  public getTopBannerById(id: string): Observable<Top_banner> {
    var url = this.topBannerUrl + '/TopBanner/' + id;
    return this.http
      .get(url)
      .pipe(map(response => {
        console.log('we got Top_banner respone ; ' + JSON.stringify(response));
        return response['data'] as Top_banner
      })
      );

  }
  public addTopBanner(post: Top_banner): Observable<Top_banner> {
    return this.http
      .post<Top_banner>(this.topBannerUrl + '/TopBanner/add', { data: post });
  }
  public deleteTopBanner(id: string): Observable<Top_banner> {
    var url = this.topBannerUrl + '/TopBanner/delete/' + id;
    return this.http
      .delete(url).pipe(map(response => {
        console.log('we got BottomBar respone ; ' + JSON.stringify(response));
        return response['data'] as Top_banner
      })
      );
  }
  public editTopBanner(id: string, post: Top_banner): Observable<Top_banner> {
    var url = this.topBannerUrl + '/TopBanner/update/' + id;
    return this.http
      .put<Top_banner>(url, { data: post });
  }
  public onUpload(selectedFile:any, post:Top_banner):Promise<any>{
    console.log("hello")
    return new Promise((resolve,error)=>{

    const fd = new FormData();
    fd.append('image', selectedFile,selectedFile.name)
    fd.append('name', name)
    console.log("fd is", fd)
    console.log('image name is ',selectedFile.name)
    console.log("selected file", selectedFile)
    console.log("upload image works")
    this.http.post<Top_banner>(this.topBannerUrl + '/TopBanner/add/image', fd)
    .subscribe((res:any)=>{
      console.log("my response is",res);
      if(res && res.id){
        post.imageid = res.id;
      this.addTopBanner(post).toPromise().then(data=>{
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
