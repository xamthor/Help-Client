import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  constructor(private userAccountService: UserAccountService, private router:Router) { }

  logOut(){
    this.userAccountService.logOut();
  }

  return(){
    this.router.navigate(['/feed']);
  }

  ngOnInit(): void {
  }

}
