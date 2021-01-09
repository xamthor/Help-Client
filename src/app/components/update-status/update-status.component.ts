import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StatusService} from '../../services/status.service';
import { faMeh, faSmile, faGrinSquintTears, faAngry, faSadCry} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  titleEmotion: string = "How do you feel?"; // Input field title and sets the icon in the input field
  content:string = "";
  faMeh = faMeh;
  faSmile = faSmile;
  faLaugh = faGrinSquintTears;
  faAngy = faAngry;
  faSadCry = faSadCry;

  constructor(private router:Router, private status:StatusService) { }

  ngOnInit(): void {
  }

  // Capture user input from input field
  getContent($event:any){
    this.content = $event;
  }

  updateContentByEmotion(emotion: string){
    console.log(emotion);
    this.content = `I am ${emotion}`;
    this.updateStatus();
  }


  updateStatus(){
    this.status.updateStatus(this.content);
    this.router.navigate(['/feed']);
  }

}
