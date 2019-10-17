import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Customer } from '../server/models/user.model';



@Injectable()
export class CustomerService {
  customerUrl = `${environment.apiUrl}/admin/user`;
  constructor(
    private http: HttpClient
  ) { }
  public getCustomers(): Observable<Customer[]> {
    return this.http
      .get(this.customerUrl+'/customer')
      .pipe(       
        map(response => {
         console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as Customer[];
        })
        ,catchError(error => {
          console.warn('I got error : ' , error);
          return of(null);
        }))
  }
  public getCustomerById(id: string): Observable<Customer> {
    var url =this.customerUrl + '/customer/' +id;  
    return this.http
      .get(url)
      .pipe(map(response =>{
        console.log('we got customer respone ; ' + JSON.stringify(response));
        return response['data'] as Customer})
      );
  
    }
    public addCustomers(post: Customer): Observable<Customer> {
      return this.http
        .post<Customer>(this.customerUrl + '/customer/add', { data: post });
    }
    public deletePost(id: string): Observable<Customer> {
      var url =this.customerUrl + '/customer/delete/' +id; 
      return this.http
        .delete(url).pipe(map(response =>{
          console.log('we got customer respone ; ' + JSON.stringify(response));
          return response['data'] as Customer})
        );
    }
    public editPost(id: string, post: Customer): Observable<Customer> {
      var url =this.customerUrl + '/customer/update/' +id;
      return this.http
        .put<Customer>(url, { data: post });
    }
    // public addCustomers(customer: Customer): Observable<Customer> {
    //   return this.http
    //     .post(this.customerUrl + '/customer/add', customer)
    //     .pipe(map(response =>{
    //       console.log('we got customer respone ; ' + JSON.stringify(response));
    //       return response['data'] as Customer})
    //     );
    // }
}