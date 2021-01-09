import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-content-messages-gallery',
  templateUrl: './content-messages-gallery.component.html',
  styleUrls: ['./content-messages-gallery.component.css']
})
export class ContentMessagesGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = this.userAccountService.getUserMessages();

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

}
