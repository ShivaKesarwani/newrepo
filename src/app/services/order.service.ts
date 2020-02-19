import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  //Get order list
  public getOrderList(params, body): Observable<any> {
  	let httpHeaders = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
  	return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'order-management/getOrders'+params, body, { headers: httpHeaders })
  }

  //Get order details
  public getOrderDetails(id): Observable<any> {
  	let httpHeaders = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
  	return this.httpClient.get(environment.WEB_SERVER_BASE_URL+'order-management/view-individual-order/'+id)
  }
}
