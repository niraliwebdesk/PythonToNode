import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Brands } from '../server/models/brands.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  brandURL = `${environment.apiUrl}/dashboard`;
   constructor(
    private http: HttpClient
   ) { }
   public getBrand(): Observable<Brands[]> {
    return this.http
      .get(this.brandURL + '/Brand')
      .pipe(
        map(response => {
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as Brands[];
        })
        , catchError(error => {
          console.warn('I got error : ', error);
          return of(null);
        }))
  }
  public getBrandById(id: string): Observable<Brands> {
    var url = this.brandURL + '/Brand/' + id;
    return this.http
      .get(url)
      .pipe(map(response => {
        console.log('we got Brands respone ; ' + JSON.stringify(response));
        return response['data'] as Brands
      })
      );

  }
  public addBrand(post: Brands): Observable<Brands> {
    return this.http
      .post<Brands>(this.brandURL + '/Brand/add', { data: post });
  }
  public deleteBrand(id: string): Observable<Brands> {
    var url = this.brandURL + '/Brand/delete/' + id;
    return this.http
      .delete(url).pipe(map(response => {
        console.log('we got BottomBar respone ; ' + JSON.stringify(response));
        return response['data'] as Brands
      })
      );
  }
  public editBrand(id: string, post: Brands): Observable<Brands> {
    var url = this.brandURL + '/Brand/update/' + id;
    return this.http
      .put<Brands>(url, { data: post });
  }
}
