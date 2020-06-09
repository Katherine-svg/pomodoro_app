import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string

  constructor(private client: HttpClient) { }

  loginRequest(username: string, password:string): Observable<string> {
    return this.client.post<string>(
      `${this.url}
          user/login?username=${username}
          &password=${password}`
          , { params: HttpParams, withCredentials: true}
    )
  }

  signupRequest(user:User) {
    return this.client.post<User>(
      `${this.url}/user/signup`
        , user
         , { withCredentials: true}
    )
  }

  logoutRequest(): Observable<string> {
    return this.client.get<string>(
      `${this.url}/user/logout`, { withCredentials: true}
    )
  }
}
