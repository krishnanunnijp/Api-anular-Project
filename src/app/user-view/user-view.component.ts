import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  data:any={}
  constructor(private api:ApiService){
    api.fetchUser().subscribe(
      (readData)=>{
        this.data=readData
      }
    )
  }
}
