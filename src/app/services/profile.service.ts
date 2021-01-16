import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {AuthenticateService} from '../services/authenticate.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

// Service used on the profile page/component to update the current user's personal details 
export class ProfileService {

  constructor(private http: HttpClient, private authenticateUser: AuthenticateService, private cookieService: CookieService) { }

  // Used on the profile page to update a detail about the currenet user
  updateProfile(updatedUser: User){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    var raw = JSON.stringify({"email":updatedUser.email,"phoneNumber":updatedUser.phoneNumber, "firstName":updatedUser.firstName,"lastName":updatedUser.lastName, "userName":updatedUser.userName});
    return this.http.post<any>(`${environment.apiEndPointRoute}/profile/update`, raw, options)
  }


}
