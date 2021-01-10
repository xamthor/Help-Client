import { Component, OnInit } from '@angular/core';
import {faUserCircle, faFeather } from '@fortawesome/free-solid-svg-icons';
import {StatusService} from '../../services/status.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-emotion-gallery',
  templateUrl: './content-emotion-gallery.component.html',
  styleUrls: ['./content-emotion-gallery.component.css']
})
export class ContentEmotionGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  feather = faFeather;
  phoneNumber :string = ""; 
  textMessage :string = "";
  arrayOfProfiles :any[]= [];

  constructor(private statusService: StatusService, private router:Router) { }

  ngOnInit(): void {
    this.statusService.getAllStatus().subscribe(data => {
      this.arrayOfProfiles = data;
      //console.log(data); //TESTING
    })    
  }

  navigateToStatusUpdate(){
    this.router.navigate(['/update-status']);
  }

  convertPhoneNumber(phone: string) :string{
    let newNumber = `tel:${phone}`;
    return newNumber;
  }

  convertTextMessage(phone: string) :string{
    let newMessage = `sms:${phone}?&body=I%20am%20having%20a%20mental%20health%20crisis.%20I%20need%20help!`
    return newMessage;
  }
}
