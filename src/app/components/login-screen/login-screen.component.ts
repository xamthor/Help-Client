import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserCreationService} from '../../services/user-creation.service';
import {LoginService} from '../../services/login.service';
import {UserAccountService} from '../../services/user-account.service';
import {AuthenticateService} from '../../services/authenticate.service';
import {User} from '../../interfaces/user'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  titleUserPassword: string = "Password";
  titleUserEmail: string = "Email";
  newUserPassword: string = "";
  newUserEmail: string = "";
  inValidLogin: boolean = false;

  constructor(
    private userCreationService: UserCreationService, 
    private loginService: LoginService, 
    private router:Router, 
    private userAccountService: UserAccountService, 
    private authenticateUser: AuthenticateService) { }

  ngOnInit(): void {
  }

  // Log in the user. If incorrect, show a error message
  async login(){
    let newUser: User ={
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      topFiveProfiles: [],
      connections: [],
    }
    
    this.loginService.validateUser(this.newUserEmail, this.newUserPassword).subscribe(data => {
      //console.log(data); //TESTING
      newUser.userName = data.data.user.userName;
      newUser.email = data.data.user.email;
      newUser.firstName = data.data.user.userName;
      newUser.lastName = data.data.user.lastName;
      newUser.phoneNumber = data.data.user.phoneNumber;
      this.authenticateUser.updateToken(data.token) // Save the user's token
      this.userAccountService.create(newUser); // Update the global "currentUser" data
      this.router.navigate(['/feed']);
      
    }, error => {
      if(error){
        this.inValidLogin = true;
      }
    }
    
    ); // End of subscribe functionality
  }

  // Redirect the user to the user account setup screen 
  createAccountAndLogin() {    
    this.router.navigate(['/setup']);
  }

  // Capture user input from input field
  getEmail($event:any){
    this.newUserEmail = $event;
  }

  // Capture user input from input field
  getPassword($event:any){
    this.newUserPassword = $event;
  }

}
