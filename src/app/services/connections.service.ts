import { Injectable } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private http: HttpClient, private authenticateUser: AuthenticateService, private cookieService: CookieService) { }

  // Method used on the content connections page to add a user to the top five    
  addConnectionTopFive(connectionID:string){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    var raw = JSON.stringify({"connection_user" : connectionID});
    return this.http.post<any>(`http://localhost:3000/connection/topfive/add`, raw, options);    
  }

    // Method used on the content connections page to add a user to the top five    
    removeConnectionTopFive(connectionID:string){
      const authToken = this.authenticateUser.getAuthToken();
      this.cookieService.set('jwt',authToken);
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
      let options = { headers: headers, withCredentials: true };
      var raw = JSON.stringify({"connection_user" : connectionID});
      return this.http.post<any>(`http://localhost:3000/connection/topfive/remove`, raw, options);    
    }

  // Method used on in the search-connections page to search database of users for anyone matching the searchTerm
  searchConnections(searchTerm:string){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    return this.http.get<any>(`http://localhost:3000/search?s=${searchTerm}`, options);    
  }

  // Method used on the content-connections page to get all of the logged in user's connections
  getAllConnections(){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    return this.http.get<any>(`http://localhost:3000/connection/all`, options);    
  }

  // Method used on the content-connections page to get top five user's connections
  getTopFive(){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    return this.http.get<any>(`http://localhost:3000/connection/topfive`, options);    
  }

  // Method used on the search-connections page to add a user as a logged in user's connection.
  async createConnection(id: string){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    var raw = JSON.stringify({"connection_user":id});
    await this.http.post<any>('http://localhost:3000/connection/create', raw, options).subscribe(
      results => {
        // TODO: Solve duplicate id issue when the user add someone who is already an connection

        //console.log(results); //TESTING
      }
    );
  }
}
