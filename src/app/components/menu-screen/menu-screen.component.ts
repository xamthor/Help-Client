import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {Router} from '@angular/router';
import { faLightbulb as solid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as regular } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  Lightsolid = solid;
  Lightregular = regular;

  constructor(private userAccountService: UserAccountService, private router:Router) { }

  logOut(){
    this.userAccountService.logOut();
  }

  return(){
    this.router.navigate(['/feed']);
  }

  ngOnInit(): void {
  }

  darktoggle(){
    if(localStorage.theme == 'dark'){localStorage.theme = 'light'}else{localStorage.theme = 'dark'}
  }

darkmode(): boolean{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return true;
    } else {
      return false;
    }
  }
}
