import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  /**
   *Get the list of users
   *@returns {Observable<any>} list of agents
  */
  public getUserList(params, body): Observable<any> {
  	let httpHeaders = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
  	return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'user-management/getusers'+params, body, { headers: httpHeaders })
  }

  //Get partcular user data using userId
  public getUserData(id): Observable<any> {
    let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
    return this.httpClient.get(environment.WEB_SERVER_BASE_URL+'user-management/view-individual-user/'+id,
      { headers })
  }
}
