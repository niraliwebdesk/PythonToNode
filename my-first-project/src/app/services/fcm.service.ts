import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { FCM } from '../server/models/fcm.model';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  FcmUrl = `${environment.apiUrl}/admin/fcm`;
  constructor(
    private http: HttpClient
    ) { }
    public getFCM(): Observable<FCM[]> {
      return this.http
        .get(this.FcmUrl+'/fcmDevice')
        .pipe(       
          map(response => {
           console.log('we got fcm respone ; ' + JSON.stringify(response));
            return response['data'] as FCM[];
          })
          ,catchError(error => {
            console.warn('I got error : ' , error);
            return of(null);
          }))
    }
    public deleteFcm(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/fcmDevice/delete/' +id; 
      return this.http
        .delete(url).pipe(map(response =>{
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as FCM})
        );
    }

    public sendNotify(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/notify/' +id; 
      return this.http
        .get(url).pipe(map(response =>{
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as FCM})
        );
    }
    public sendDataNotify(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/dataNotify/' +id; 
      return this.http
        .get(url).pipe(map(response =>{
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as FCM})
        );
    }
    public editFCM(id: string, post: FCM): Observable<FCM> {
      var url =this.FcmUrl + '/fcmDevice/update/' +id;
      return this.http
        .put<FCM>(url, { data: post });
    }

    //able the activation
    public changeActivation(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/enable/' +id;
      return this.http
        .put<FCM>(url, { data: {"isActive" : true} }); // truee!!
    }
    
    //disable the activation
    public disableActivation(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/enable/' +id;
      return this.http
        .put<FCM>(url, { data: {"isActive" : false} }); // false!!
    }
    public addFcm(post: FCM): Observable<FCM> {
      return this.http
        .post<FCM>(this.FcmUrl + '/fcmDevice/add', { data: post });
    }
    public getFcmById(id: string): Observable<FCM> {
      var url =this.FcmUrl + '/fcmDevice/' +id;  
      return this.http
        .get(url)
        .pipe(map(response =>{
          console.log('we got order respone ; ' + JSON.stringify(response));
          return response['data'] as FCM})
        );
    
      }
}
