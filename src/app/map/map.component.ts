import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import {MdDialog , MdDialogConfig } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';

import { PlacesService } from '../places/shared/places.service';
import { SettingsService } from '../settings/shared/settings.service';
import { InfoCardComponent } from '../info-card/info-card.component'

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [PlacesService, SettingsService]
})

export class MapComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public places: FirebaseListObservable<any[]>;
  public cities: FirebaseListObservable<any[]>;
  public selectedCity: string;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private placesService: PlacesService,
    private settingsService: SettingsService,
    public dialog: MdDialog
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 12;
    this.latitude = 6.2441988;
    this.longitude = -75.6512527;
    this.getPlaces('restaurantes');
    this.getCities();

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    /*this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });*/
  }

  getPlaces(category){
    console.log(this.selectedCity);
    this.places = this.placesService.getPlaces(category, this.selectedCity);
  }

  getCities(){
    this.cities = this.settingsService.getCities();
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public openInfoCard(place){
    console.log(place);
    let config = new MdDialogConfig;
    config = { 
      height: '80%',
      width: '80%'
    };
    config.data = { place: place }
    let dialogRef = this.dialog.open(InfoCardComponent, config);
  }

}
