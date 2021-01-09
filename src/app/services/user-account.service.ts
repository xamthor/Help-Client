import { Injectable } from '@angular/core';
import { Connection } from '../interfaces/connections';
import { User } from '../interfaces/user';
import * as _ from 'lodash';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

// Service use to load the current user and then update the app communication's pages with content
export class UserAccountService {
  currentUser: User = {
    userName: "",
    password: "",
    email: "",
    firstName: "Bob",
    lastName: "",
    phoneNumber: "",
    topFiveProfiles: [],
    connections: [],
  }

  constructor(private router:Router) {}

  // Method in the content-header component to log out the user
  logOut(){
    this.currentUser = {
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      topFiveProfiles: [],
      connections: [],
    }
    this.router.navigate(['/login']);
  }  
  // Method to update the current user from the Login and User Creation services
  create(user: User) {
    this.currentUser = user;
    // TODO: Replace this method implementation with a call to the server to create an account
  }

  // Return an array of connections that have active messages in the messages content page
  getUserMessages(): any {
    // Creates an empty array of with inteface Connection type objects
    let connectionsWithMessages: Connection[] = [];

    this.currentUser.connections.forEach((connection) => {
      if (connection.lastMessageTimeStamp > 0) {
        connectionsWithMessages.push(connection);
      }
    });
    return connectionsWithMessages;
  }

  // Method used on the content-header component to display the current user's first  name
  getFirstName() { 
    return this.currentUser.firstName;    
  }

  // Return's the current user's username
  getUserName() {
    // TODO check the current session to detect which user is active
    return this.currentUser.userName;
  }

  // Method used on the content-feed and content-connections pages to display a user's connections
  getConnections() {
    return this.currentUser.connections;    
  }

  // Method used on in the content-top-five component
  getTopFive() {
    return this.currentUser.topFiveProfiles;
  }
}
