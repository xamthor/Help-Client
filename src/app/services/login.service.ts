import { Injectable } from '@angular/core';
import {UserAccountService} from '../services/user-account.service';
import {AuthenticateService} from '../services/authenticate.service';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

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

  constructor(private userAccountService: UserAccountService, private authenticateUser: AuthenticateService, private http: HttpClient, private router:Router) { }

  // Used on the log-in page to Simulate checking a database of users, validating the username/password, and updating the app
  async validateUser(userName: string, password: string){

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify({"email":userName,"password":password});
    await this.http.post<any>('http://localhost:3000/auth/login', raw,{headers: headers}).subscribe(
      results => {
        //console.log(results); // TESTING
        this.newUser.userName = results.data.user.userName;
        this.newUser.email = results.data.user.email;
        this.newUser.firstName = results.data.user.userName;
        this.authenticateUser.updateToken(results.token) // Save the user's token
        this.userAccountService.create(this.newUser);
        this.router.navigate(['/feed']);
      },
      Error => {
        console.log('Error happened')
      }
      
    );
  }
}
