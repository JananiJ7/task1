import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { DetailService } from '../detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  default: string = 'Advanced';
email:any;
password:any;
subscription:any
signupForm:FormGroup;
pwdPattern = "^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$";
message;

forbiddenUserName=['sowmi','hannah'];

constructor(private detailService:DetailService,
   private router:Router){

}

ngOnInit(){
 this.signupForm=new FormGroup({
   'userdata':new FormGroup({ 
    
    'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
    'password':new FormControl(null,[Validators.required,Validators.pattern(this.pwdPattern)]),
    'subscription':new FormControl(this.default)
   }),
  
   
 });
 
}
ngOnChanges() {
  if (!!this.signupForm && this.signupForm.dirty) {
      console.log("The form is dirty!");
  }
  else {
      console.log("No changes yet!");
  }      
}  

onclear(){
  
  
    alert ('Are you sure to discard details');
  
  
     
      this.signupForm.reset();
   }
   




onSubmit(){
  console.log(this.signupForm);
  
  this.email=this.signupForm.value.userdata.email;
  this.password=this.signupForm.value.userdata.password;
  this.subscription=this.signupForm.value.userdata.subscription;
  this.detailService.userdetails(this.email,this.password,this.subscription);
  this.router.navigate(['/display']);
 
}


forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
 const promise=new Promise<any>((resolve,reject)=>{
   setTimeout(() => {
     if(control.value==='1@1.com'){
       resolve({'email is forbidden':true}); 
     }else{resolve(null);}
   }, 2000);
 });
 return promise;
}
}


