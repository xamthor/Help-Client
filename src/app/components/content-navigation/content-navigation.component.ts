import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.css']
})
export class ContentNavigationComponent implements OnInit {
  @Input() nav!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
