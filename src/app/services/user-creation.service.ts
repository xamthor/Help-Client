import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import {UserAccountService} from '../services/user-account.service';
import {AuthenticateService} from '../services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// Service used during the user creation process
export class UserCreationService {
  // Temp user updated during the user creation process. Later used to update the user-account service
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

  constructor(private userAccountService: UserAccountService, private http: HttpClient, private router:Router, private authenticateUser: AuthenticateService) { }

  // Create a temp user (newUswer) during user account creation 
  setUpUser( tempUser: User){
    this.newUser = tempUser;
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updateFirstName(fName: string) {
      this.newUser.firstName = fName;    
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updateLastName(lName: string) {
      this.newUser.lastName = lName;    
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updatephone(phone: string) {
      this.newUser.phoneNumber = phone;    
  }

  // Update the user account service and database with the temp user
  async createUser(){
    this.userAccountService.create(this.newUser);

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify(this.newUser);
    await this.http.post<any>('http://localhost:3000/auth/signup', raw,{headers: headers}).subscribe(
      results => {
        this.authenticateUser.updateToken(results.token) //record the auth token
        this.router.navigate(['/search-connections']); // Redirect the user to search connections's screen 
      },
      Error => {
        console.log('Error happened')
      }
      
    );
  }
}
