import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SettingsService{

	constructor(public angularFire: AngularFire){
	}

	getCategories() {
		return this.angularFire.database.list('/categorias');
	}

	getCities(){
		return this.angularFire.database.list('/ciudades');
	}
}