import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import {AF} from "./providers/firebase-security.service";
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { BasicInfoComponent } from './admin/panel-admin/basic-info/basic-info.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCGbmIJk-aJ1N50rRjkVtwe8sjEbFqMsv4",
  authDomain: "conectemos-1488637492136.firebaseapp.com",
  databaseURL: "https://conectemos-1488637492136.firebaseio.com",
  storageBucket: "conectemos-1488637492136.appspot.com",
  messagingSenderId: "738434509145"
};

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/panel',
    component: PanelAdminComponent
  },
  { path: '',
    component: MenuComponent
  }
];

@NgModule({
  declarations: [
    InfoCardComponent,
    MenuComponent,
    MapComponent,
    AppComponent,
    AdminComponent,
    LoginComponent,
    PanelAdminComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPHzHiHQXiwO2iv9DQSX5d3PH9PJDqMr0',
      libraries: ['places']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [InfoCardComponent],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
