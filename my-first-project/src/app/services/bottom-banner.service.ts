import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { BottomBar } from '../server/models/bottom_bar.model';



@Injectable({
  providedIn: 'root'
})
export class BottomBannerService {

  bottomBannerUrl = `${environment.apiUrl}/dashboard`;
  constructor(
    private http: HttpClient
  ) { }
  public getBottomBanner(): Observable<BottomBar[]> {
    return this.http
      .get(this.bottomBannerUrl + '/bottomBanner')
      .pipe(
        map(response => {
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as BottomBar[];
        })
        , catchError(error => {
          console.warn('I got error : ', error);
          return of(null);
        }))
  }
  public getBottomBannerById(id: string): Observable<BottomBar> {
    var url = this.bottomBannerUrl + '/bottomBanner/' + id;
    return this.http
      .get(url)
      .pipe(map(response => {
        console.log('we got BottomBar respone ; ' + JSON.stringify(response));
        return response['data'] as BottomBar
      })
      );

  }
  public addBottomBanner(post: BottomBar): Observable<BottomBar> {
    return this.http
      .post<BottomBar>(this.bottomBannerUrl + '/bottomBanner/add', { data: post });
  }
  public deleteBottomBanner(id: string): Observable<BottomBar> {
    var url = this.bottomBannerUrl + '/bottomBanner/delete/' + id;
    return this.http
      .delete(url).pipe(map(response => {
        console.log('we got BottomBar respone ; ' + JSON.stringify(response));
        return response['data'] as BottomBar
      })
      );
  }
  public editBottomBanner(id: string, post: BottomBar): Observable<BottomBar> {
    var url = this.bottomBannerUrl + '/bottomBanner/update/' + id;
    return this.http
      .put<BottomBar>(url, { data: post });
  }
}
