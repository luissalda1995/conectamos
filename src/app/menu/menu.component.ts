import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { SettingsService } from '../settings/shared/settings.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [SettingsService]
})

export class MenuComponent {
  categorias:FirebaseListObservable<any[]>;

  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild(MapComponent)
  private mapComponent: MapComponent;

  constructor(angularFire: AngularFire, private settingsService: SettingsService) {
  }

  ngOnInit() {
      this.categorias = this.settingsService.getCategories();
      this.sidenav.onOpen.subscribe(() => {
          console.log("Sidenav opened");
      });

      setTimeout(this.openSidenav.bind(this), 5000);
  }

  openSidenav() {
      this.sidenav.open();
  }
}
