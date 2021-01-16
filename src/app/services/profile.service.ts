import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  // Used on the log-in page to update the app by validating the username/password from the back-end database
  updateProfile(updatedUser: User){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify({"email":updatedUser.email,"phoneNumber":updatedUser.phoneNumber, "firstName":updatedUser.firstName,"lastName":updatedUser.lastName, "userName":updatedUser.userName});
    return this.http.post<any>(`${environment.apiEndPointRoute}/profile/update`, raw,{headers: headers})
  }


}
