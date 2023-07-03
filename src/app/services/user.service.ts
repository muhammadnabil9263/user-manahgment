import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl;

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/users');
  }
  
  getUser(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/users/'+id);
  }

  searchUsers(searchString:string):Observable<any> {
      return this.http.get<any>(this.apiUrl + '/search/'+searchString);
  }
  
  getOrgnizations(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/Orgnizations');
  }
 
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users', user);
  }

  updateUser(user: any,id:any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/user/' + id , user);
  }

  resetPassword(user: any,id:any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/users/' + id +'/reset-password', user);
  }
}
