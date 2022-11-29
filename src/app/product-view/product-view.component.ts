import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  data:any={}
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
    (readValues)=>{
      this.data=readValues
    }
    )

  }
}
