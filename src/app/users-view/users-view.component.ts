import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent {
  data:any={}
  constructor(private api:ApiService){
    api.fetchUsers().subscribe(
      (readData)=>{

        this.data=readData
      }
    )
  }

}
