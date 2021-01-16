import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

// Service used when a user attempts to log in. 
export class LoginService {
  newUser: User ={
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    topFiveProfiles: [],
    connections: [],
  }

  constructor(private http: HttpClient) { }

  // Used on the log-in page to update the app by validating the username/password from the back-end database
  validateUser(userName: string, password: string){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify({"email":userName,"password":password});
    return this.http.post<any>(`${environment.apiEndPointRoute}/auth/login`, raw,{headers: headers})
  }
}
