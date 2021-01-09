import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faUser, faUnlockAlt, faEnvelope, faPhoneAlt, faSearch, faMeh} from '@fortawesome/free-solid-svg-icons';
//import { EventEmitter } from 'events';


@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  @Input() title!: string;
  faUser = faUser;
  faLock = faUnlockAlt;
  faEmail = faEnvelope
  faPhone = faPhoneAlt; 
  faSearch = faSearch;
  faMeh = faMeh;

  @Output() getUserInput = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }
}
