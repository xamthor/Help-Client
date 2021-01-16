import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserAccountService} from '../../services/user-account.service';
import {ProfileService} from '../../services/profile.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  titleUserName: string = "Username";    // Input field title and sets the icon in the input field
  titleUserEmail: string = "Email";      // Input field title and sets the icon in the input field
  titlePhone: string = "Phone Number";   // Input field title and sets the icon in the input field
  titleFirstName: string = "First Name"; // Input field title and sets the icon in the input field
  titleLastName: string = "Last Name";   // Input field title and sets the icon in the input field

  newUserName: string = "";  // variable updated from the input designiated input field and then used to update the temp User
  newUserEmail: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserFname: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserLname: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  newUserPhone: string = ""; // variable updated from the input designiated input field and then used to update the temp User


  updatedCurrentUser :User = {
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    topFiveProfiles: [],
    connections: [],
  };

  constructor(private router:Router, private userAccountServices: UserAccountService, private profileService: ProfileService) { 
    this.updatedCurrentUser = this.userAccountServices.getCurrentUser(); // Update the user profile with the global currenet user'profile
    console.log(this.updatedCurrentUser);
  }

  ngOnInit(): void {
  }

  updateProfile(){
    
    this.userAccountServices.create(this.updatedCurrentUser);// Update the global current user's profile
    this.profileService.updateProfile(this.updatedCurrentUser).subscribe(data => {
      //this.arrayOfProfiles = data.data;
      console.log(data); //TESTING
      this.router.navigate(['/feed']);
    })
    console.log(this.updatedCurrentUser);
  }

  // Capture user input from input field
  getUserName($event:any){
    //this.newUserName = $event;
    this.updatedCurrentUser.userName = $event;
  }

  // Capture user input from input field
  getEmail($event:any){
    //this.newUserEmail = $event;
    this.updatedCurrentUser.email = $event;
  }

      // Capture user input from input field
  getFirstName($event:any){
    //this.newUserFname = $event;
    this.updatedCurrentUser.firstName = $event;
  }  

  // Capture user input from input field
  getLastName($event:any){
    //this.newUserLname = $event;
    this.updatedCurrentUser.lastName = $event;
  }

  // Capture user input from input field
  getPhone($event:any){
    //this.newUserPhone = $event;
    this.updatedCurrentUser.phoneNumber = $event;
  }

}
