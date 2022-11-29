import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsDataComponent } from './us-data/us-data.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { UserInfoiComponent } from './user-infoi/user-infoi.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsDataComponent,
    PublicApiComponent,
    UserInfoiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
