import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsDataComponent } from './us-data/us-data.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { UserInfoiComponent } from './user-infoi/user-infoi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },
  {
    path:"us",
    component:UsDataComponent
  },
  {
    path:"info",
    component:UserInfoiComponent

  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"user",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:ToDoComponent
  },
  {
    path:"quotes",
    component:QuotesAppComponent
  },
  {
    path:"public",
    component:PublicApiComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsDataComponent,
    PublicApiComponent,
    UserInfoiComponent,
    NavbarComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    QuotesAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
