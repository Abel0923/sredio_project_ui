import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:3000/auth'; // Change to your server URL

  constructor(private httpClient: HttpClient) {
  }

  public getUser(){
    return this.httpClient.get(this.apiUrl+"/user")
  }

  public getUserData(accessToken: string): Observable<any> {
    return this.httpClient.get(this.apiUrl+'/user', {
      headers: { Authorization: `token ${accessToken}` },
    });
  }


  public removeUser(accessToken: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl+'/user', {
      headers: { Authorization: `token ${accessToken}` },
    });
  }

}
