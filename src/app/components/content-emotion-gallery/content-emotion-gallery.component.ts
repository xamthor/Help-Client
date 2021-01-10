import { Component, OnInit } from '@angular/core';
import {faUserCircle, faFeather } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-emotion-gallery',
  templateUrl: './content-emotion-gallery.component.html',
  styleUrls: ['./content-emotion-gallery.component.css']
})
export class ContentEmotionGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  feather = faFeather;
  arrayOfProfiles = this.userAccountService.getConnections();

  constructor(private userAccountService: UserAccountService, private router:Router) { }

  ngOnInit(): void {
  }

  navigateToStatusUpdate(){
    this.router.navigate(['/update-status']);
  }

}
