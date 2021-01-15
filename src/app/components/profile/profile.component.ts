import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  updateProfile(){
    this.router.navigate(['/feed']);
    console.log("Testing Update Profile function"); //TESTING
  }

  // Capture user input from input field
  getUserName($event:any){
    this.newUserName = $event;
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

}
