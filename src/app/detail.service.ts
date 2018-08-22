import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
details:any;
myobservable;

  constructor() { }
  userdetails(email,password,subscription){
    this.details= {
      email: email,
      password: password,
      subscription:subscription
    }
   
    this.myobservable = Observable.create((observer:Observer<any>)=>{
      observer.next(this.details);
    });
  }
}
