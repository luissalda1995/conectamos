import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
	constructor(public router: Router){

	}
}
