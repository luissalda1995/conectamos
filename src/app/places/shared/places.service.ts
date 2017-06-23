import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Place } from '../place';
import { PLACES } from '../mocks/mock-places';

@Injectable()
export class PlacesService{

	constructor(public angularFire: AngularFire){
	}

	getPlaces(category, city) {
		return this.angularFire.database.list('/lugares/' + city + '/' + category);
	}

	savePlace(place, category, city){
		let places = this.angularFire.database.list('/lugares/' + city + '/' + category);
		places.push(place);
	}
}