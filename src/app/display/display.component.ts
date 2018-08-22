import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
details;
email;
password;
subscription;
displaymode=false;
  constructor(private detailService:DetailService) { }

  ngOnInit() {
    
  }
  fun(){
    this.detailService.myobservable.subscribe( (data:string)=>{
      this.details = data;
      console.log(data);
    }
  )
this.email = this.details.email
this.password = this.details.password;
this.subscription=this.details.subscription;
this.displaymode=true;
  }
  
}
