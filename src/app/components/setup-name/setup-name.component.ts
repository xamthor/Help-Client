import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {UserCreationService} from '../../services/user-creation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup-name',
  templateUrl: './setup-name.component.html',
  styleUrls: ['./setup-name.component.css']
})
export class SetupNameComponent implements OnInit {
  titlePhone: string = "Phone Number"; // Input field title and sets the icon in the input field
  titleFirstName: string = "First Name"; // Input field title and sets the icon in the input field
  titleLastName: string = "Last Name"; // Input field title and sets the icon in the input field
  titleSearch: string = "Search"; // Input field title and sets the icon in the input field
  stage: number = 1; // Value use to move the user through the different setup account sections
  newUserFname: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserLname: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserPhone: string = ""; // variable updated from the input designiated input field and then used to update the temp User

  constructor(private userCreationService: UserCreationService, private router:Router) { }

  ngOnInit(): void {
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
    if(this.stage === 1){
      this.userCreationService.updateFirstName(this.newUserFname);
      this.userCreationService.updateLastName(this.newUserLname);
    }

    if(this.stage === 2){
      this.userCreationService.updatephone(this.newUserPhone);
      this.userCreationService.createUser();      
    }

    this.stage ++; // Move the user through the three user creation screens
  }
}
