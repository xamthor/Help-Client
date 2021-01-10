import { Component, OnInit } from '@angular/core';
import {faUserCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import {ConnectionsService} from '../../services/connections.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-content-top-five',
  templateUrl: './content-top-five.component.html',
  styleUrls: ['./content-top-five.component.css']
})
export class ContentTopFiveComponent implements OnInit {
  profilePic = faUserCircle;
  powerOff = faPowerOff;
  showConnection: boolean = false; // variable used to either show all top five or hightlight one of them
  fName :string = ""; // variable displayed when highlighting one of the top five
  lName :string = ""; // variable displayed when highlighting one of the top five
  phoneNumber :string = "";  // variable displayed when highlighting one of the top five
  textMessage :string = "";

  dummyData :User[] = [
    {
      userName: "admin1",
      password: "password",
      email: "admin1@admin.com",
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "111-111-1111",
      topFiveProfiles: [],
      connections: [],
    },
    {
      userName: "admin2",
      password: "password",
      email: "admin2@admin.com",
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "111-111-1111",
      topFiveProfiles: [],
      connections: [],
    },
    {
      userName: "admin3",
      password: "password",
      email: "admin3@admin.com",
      firstName: "Carl",
      lastName: "Williams",
      phoneNumber: "111-111-1111",
      topFiveProfiles: [],
      connections: [],
    }
  ];

  //arrayOfProfiles = this.dummyData;
  arrayOfProfiles :any[]= [];

  constructor(private connectionsService:ConnectionsService ) { }

  ngOnInit(): void {
    this.connectionsService.getTopFive().subscribe(data => {
      this.arrayOfProfiles = data.data;
      //console.log(data); //TESTING
    })

  }

  displayConnection(index :number){
    this.showConnection = true;
    this.fName = this.arrayOfProfiles[index].connection_user.firstName;
    this.lName = this.arrayOfProfiles[index].connection_user.lastName;
    this.phoneNumber = `tel:$(this.arrayOfProfiles[index].connection_user.phoneNumber)`;
    this.textMessage = `sms:$(this.arrayOfProfiles[index].connection_user.phoneNumber)?&body=I%20am%20having%20a%20mental%20health%20crisis.%20I%20need%20help!`;
  }

  reshowTopFive(){
    this.showConnection = false;
    //console.log("hide connection"); // TESTING
  }

}
