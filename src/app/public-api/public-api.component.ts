import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api',
  templateUrl: './public-api.component.html',
  styleUrls: ['./public-api.component.css']
})
export class PublicApiComponent {

  constructor(private api:ApiService)
  {
    api.fetchPublic().subscribe(
      (response)=>
      {
        this.view=response;
      }
    )
  }

    view:any=[]

}
