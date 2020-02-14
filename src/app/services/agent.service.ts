import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  constructor(private httpClient: HttpClient) {}

  /**
   *Get the list of agents
   *@returns {Observable<any>} list of agents
  */
  public getAgentList(params, body): Observable<any> {
  	let httpHeaders = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
  	return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'agent-management/getAgents'+params, body, { headers: httpHeaders })
  } 
}
