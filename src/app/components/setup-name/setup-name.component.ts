import { Component, OnInit } from '@angular/core';
import {UserCreationService} from '../../services/user-creation.service';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user'

@Component({
  selector: 'app-setup-name',
  templateUrl: './setup-name.component.html',
  styleUrls: ['./setup-name.component.css']
})

export class SetupNameComponent implements OnInit {
  titleUserName: string = "Username";       // Input field title and sets the icon in the input field
  titleUserPassword: string = "Password";   // Input field title and sets the icon in the input field
  titleUserEmail: string = "Email";         // Input field title and sets the icon in the input field
  titlePhone: string = "Phone Number";      // Input field title and sets the icon in the input field 
  titleFirstName: string = "First Name";    // Input field title and sets the icon in the input field
  titleLastName: string = "Last Name";      // Input field title and sets the icon in the input field
  titleSearch: string = "Search";           // Input field title and sets the icon in the input field  
  newUserName: string = "";     // variable updated from the input designiated input field and then used to update the temp User
  newUserPassword: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserEmail: string = "";    // variable updated from the input designiated input field and then used to update the temp User
  newUserFname: string = "";    // variable updated from the input designiated input field and then used to update the temp User
  newUserLname: string = "";    // variable updated from the input designiated input field and then used to update the temp User
  newUserPhone: string = "";    // variable updated from the input designiated input field and then used to update the temp User
  stage: number = 1;            // Value use to move the user through the different setup account sections
  constructor(private userCreationService: UserCreationService, private router:Router) { }

  ngOnInit(): void {
  }

  // Capture user input from input field
  getUserName($event:any){
    this.newUserName = $event;
  }

  // Capture user input from input field
  getPassword($event:any){
    this.newUserPassword = $event;
  }

  // Capture user input from input field
  getEmail($event:any){
    this.newUserEmail = $event;
  }

  // Capture user input from input field
  getFirstName($event:any){
    this.newUserFname = $event;
  }  

  // Capture user input from input field
  getLastName($event:any){
    this.newUserLname = $event;
  }

  // Capture user input from input field
  getPhone($event:any){
    this.newUserPhone = $event;
  }

  //Method used to update the temp user until finished. Once finished, a real user is create and redirected into the app
  goToNextSetupStage(){
    if(this.stage === 3){
      try {
        let newUser : User = {
          userName: this.newUserName,
          password: this.newUserPassword,
          email: this.newUserEmail,
          firstName: this.newUserFname,
          lastName: this.newUserLname,
          phoneNumber: this.userCreationService.updatephone(this.newUserPhone) ,
          topFiveProfiles: [],
          connections: [],
        };
  
        this.userCreationService.createUser(newUser);   
      }
      catch (err) {
  
      }
    }
    this.stage ++; // Move the user through the three user creation screens
  }
}
