import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title: string = 'Help';
	register: string = "false";

	ngOnInit(): void {
		this.darkmode()
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
