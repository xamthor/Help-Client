import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import {UserAccountService} from '../services/user-account.service';
import {AuthenticateService} from '../services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

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

  // Method used on the setup user account pages to update the temp user (newUser)
  updatephone(phone: string) :string{
      const regexTest : RegExp = /[0-9]/;
      let phoneArray: string[] = phone.split("");
      let newPhoneArray: string[] = [];
      phoneArray.forEach(num => {
        if(regexTest.test(num)){
          newPhoneArray.push(num);
        }
      });
      
      return newPhoneArray.join("");
  }

  // Update the user account service and database with the temp user
  async createUser(tempUser: User){
    this.userAccountService.create(tempUser);

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify(tempUser);
    await this.http.post<any>(`${environment.apiEndPointRoute}/auth/signup`, raw,{headers: headers}).subscribe(
      results => {
        this.authenticateUser.updateToken(results.token)  //record the auth token
        this.router.navigate(['/search-connections']);    // Redirect the user to search connections's screen 
      },
      Error => {
        console.log('Error happened')
      }
      
    );
  }
}
