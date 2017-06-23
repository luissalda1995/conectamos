import { Component } from '@angular/core';
import { AF } from "../../providers/firebase-security.service";
import { Router } from '@angular/router';

@Component({
	selector: 'login',
 	templateUrl: './login.component.html',
 	styleUrls: []
})

export class LoginComponent{
	public error: any;
	
	constructor(public afService: AF, private router: Router) {}

	loginWithGoogle() {
		this.afService.loginWithGoogle().then((data) => {
		  // Send them to the homepage if they are logged in
		  this.router.navigate(['']);
		})
	}


	loginWithEmail(event, email, password){
		event.preventDefault();
		this.afService.loginWithEmail(email, password).then(() => {
	  		this.router.navigate(['']);
		})
	  	.catch((error: any) => {
	    	if (error) {
	      		this.error = error;
	      		console.log(this.error);
	    	}
	  });
	}
}