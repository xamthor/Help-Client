import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { faLightbulb as solid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as regular } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title: string = 'Help';
	register: string = "false";
	Lightsolid = solid;
	Lightregular = regular;

	ngOnInit(): void {
		this.darkmode()
		console.log(environment.production); // Logs false for default environment
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
