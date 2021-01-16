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
  }

  ngOnInit(): void {
  }

  // Method called to update the global current user data, back-end database, and route the user back to the feed content page
  updateProfile(){    
    this.userAccountServices.create(this.updatedCurrentUser);// Update the global current user's profile
    this.profileService.updateProfile(this.updatedCurrentUser).subscribe(data => {
      this.router.navigate(['/feed']);
      // TODO: Inform the user that the update was successful
    })
  }

  // Capture user input from input field
  getUserName($event:any){
    this.updatedCurrentUser.userName = $event;
  }

  // Capture user input from input field
  getEmail($event:any){
    this.updatedCurrentUser.email = $event;
  }

  // Capture user input from input field
  getFirstName($event:any){
    this.updatedCurrentUser.firstName = $event;
  }  

  // Capture user input from input field
  getLastName($event:any){
    this.updatedCurrentUser.lastName = $event;
  }

  // Capture user input from input field
  getPhone($event:any){
    this.updatedCurrentUser.phoneNumber = $event;
  }

}
