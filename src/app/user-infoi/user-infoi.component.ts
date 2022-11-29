import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-infoi',
  templateUrl: './user-infoi.component.html',
  styleUrls: ['./user-infoi.component.css']
})
export class UserInfoiComponent {

  constructor(private api:ApiService)
  {
    api.fetchUserinfo().subscribe(
      (response)=>
      {
        this.view=response;
      }
    )
  }
  view:any=[]

}
