import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  /**
   * This method is use for login User.
   * @param {object} object contain emailid and password
   * @returns {Observable<any>}
   */
  public login(loginData): Observable<any> {
    return this.httpClient.post(environment.WEB_SERVER_BASE_URL + 'auth/login', loginData);
  }

  /**
  *Logout api call
  */
  public logout(): Observable<any> {
    const headers = new HttpHeaders({'access_token': localStorage.getItem('access_token')})
    return this.httpClient.get(environment.WEB_SERVER_BASE_URL + 'auth/logout', { headers })
  }


































}
