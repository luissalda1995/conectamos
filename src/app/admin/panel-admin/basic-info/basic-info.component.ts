import { Component } from '@angular/core';

import { Place } from '../../../places/place';
import { PlacesService } from '../../../places/shared/places.service';

@Component({
	selector: 'admin-basic-info',
	templateUrl: 'basic-info.component.html',
	styleUrls: [],
	providers:[PlacesService]
})

export class BasicInfoComponent {

	public place: Place = new Place('',0,0,'');

	constructor(private placesService: PlacesService){

	}

	savePlace(){
		console.log(this.place);
		this.placesService.savePlace(this.place);
	}

}