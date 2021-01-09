import { Component, OnInit } from '@angular/core';
import {faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  profilePic = faUserCircle;
  menu = faBars;
  firstName : string = ""

  constructor(private userAccountService: UserAccountService, private router:Router) { }

  navigateToStatusUpdate(){
    this.router.navigate(['/update-status']);
  }

  navigateToMenu(){
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {
    this.firstName = this.userAccountService.getFirstName();
  }  

}
