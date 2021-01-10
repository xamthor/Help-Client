import { Injectable } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient, private router:Router, private authenticateUser: AuthenticateService, private cookieService: CookieService) { }

  // Method used on the feed-content page to retrived and display all statues
  getAllStatus(){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    return this.http.get<any>(`${environment.apiEndPointRoute}/status/all`, options);    
  }

  async updateStatus(userContent: string){
    const authToken = this.authenticateUser.getAuthToken();
    //console.log(authToken);
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': authToken});
    let options = { headers: headers, withCredentials: true };
    var raw = JSON.stringify({"content":userContent});
    await this.http.post<any>(`${environment.apiEndPointRoute}/status/create`, raw, options).subscribe(
      results => {

        ///console.log(results);
        this.router.navigate(['/feed']);
      },
      Error => {
        console.log('Update Status failed')
      }
      
    );
  }
}
