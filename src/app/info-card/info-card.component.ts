import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Place } from '../places/place';

@Component({
	templateUrl: './info-card.component.html',
	styleUrls: []
})

export class InfoCardComponent{
	public visible = false;
	private visibleAnimate = false;
	public place: Place;


	constructor(public dialogRef: MdDialogRef<InfoCardComponent>){
		this.place = dialogRef.config.data.place;
	}

	public hide(): void {
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
	}
}