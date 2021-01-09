import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Share the authentication token of the user after log-in
export class AuthenticateService {

  authenticateUser: string = ""

  constructor() { }

  isAuthenticated() :boolean{
    if(this.authenticateUser === ""){
      return false;
    }
    return true;
  }

  updateToken(newToken: string){
    this.authenticateUser = newToken;   
    //console.log(newToken);
  }

  getAuthToken(){
    return this.authenticateUser;
  }
}
