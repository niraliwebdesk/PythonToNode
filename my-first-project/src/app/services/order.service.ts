import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Order } from '../server/models/order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = `${environment.apiUrl}/admin/user`;

  constructor(
    private http: HttpClient
  ) { }
  public getOrders(): Observable<Order[]> {
    return this.http
      .get(this.orderUrl+'/order')
      .pipe(       
        map(response => {
         console.log('we got order respone ; ' + JSON.stringify(response));
          return response['data'] as Order[];
        })
        ,catchError(error => {
          console.warn('I got error : ' , error);
          return of(null);
        }))
  }
  public deleteOrder(id: string): Observable<Order> {
    var url =this.orderUrl + '/order/delete/' +id; 
    return this.http
      .delete(url).pipe(map(response =>{
        console.log('we got customer respone ; ' + JSON.stringify(response));
        return response['data'] as Order})
      );
  }
  public editOrder(id: string, post: Order): Observable<Order> {
    var url =this.orderUrl + '/order/update/' +id;
    return this.http
      .put<Order>(url, { data: post });
  }
  public addOrder(post: Order): Observable<Order> {
    return this.http
      .post<Order>(this.orderUrl + '/order/add', { data: post });
  }
  public getOrderById(id: string): Observable<Order> {
    var url =this.orderUrl + '/order/' +id;  
    return this.http
      .get(url)
      .pipe(map(response =>{
        console.log('we got order respone ; ' + JSON.stringify(response));
        return response['data'] as Order})
      );
  
    }
}
