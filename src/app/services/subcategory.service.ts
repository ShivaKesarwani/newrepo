import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpClient:HttpClient) { }

   /**
	*Get all category list
   */
   public getCategoryList(params,body): Observable<any> {
     let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
     return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'category-management/get-sub-categories'+params, body, { headers })
   }

   //Add new category
   public addNewSubCategory(body): Observable<any> {
     let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
     return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'category-management/add-sub-category', body, { headers })
   }

   //Edit category
   public editSubCategory(body): Observable<any> {
     let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
     return this.httpClient.post(environment.WEB_SERVER_BASE_URL+'category-management/update-sub-category', body, { headers })
   }

   //View category
   public viewSubCategory(id): Observable<any> {
   	  let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
      return this.httpClient.get(environment.WEB_SERVER_BASE_URL+'category-management/view-sub-category-details/'+id,
        { headers })
   }

   //Hide category
   public hideCategory(params): Observable<any> {
   	  let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
      return this.httpClient.get(environment.WEB_SERVER_BASE_URL+'category-management/show-hide-category/'+params,
        { headers })
   }

   //Get parent category list
   public getParentcategory(): Observable<any> {
     let headers = new HttpHeaders({ 'access_token': localStorage.getItem('access_token') })
     return this.httpClient.get(environment.WEB_SERVER_BASE_URL+'category-management/get-parent-categories', { headers }) 
   }
}
