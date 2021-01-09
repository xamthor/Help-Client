import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-content-emotion-gallery',
  templateUrl: './content-emotion-gallery.component.html',
  styleUrls: ['./content-emotion-gallery.component.css']
})
export class ContentEmotionGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = this.userAccountService.getConnections();

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

}
