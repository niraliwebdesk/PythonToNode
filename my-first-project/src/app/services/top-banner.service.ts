import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Top_banner } from '../server/models/top_banner.model';


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
}
