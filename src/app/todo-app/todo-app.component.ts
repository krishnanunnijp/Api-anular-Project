import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
data:any={}
constructor(private api:ApiService){
  api.fetchTodo().subscribe(
    (readData)=>{
      this.data=readData
    }
  )
}

}
