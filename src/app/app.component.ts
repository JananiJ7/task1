import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { DetailService } from './detail.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
    default: string = 'Advanced';
  email:any;
  password:any;
  subscription:any
  signupForm:FormGroup;
  pwdPattern = "^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$";
  message;
 
  forbiddenUserName=['sowmi','hannah'];

  constructor(private detailService:DetailService){

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

  onclear(signupForm){
    if(this.signupForm.value!="null")
    {
      this.message=new alert("Are you sure to clear details");
    }
this.signupForm.reset();
  }

 
  onSubmit(){
    console.log(this.signupForm);
    
    this.email=this.signupForm.value.userdata.email;
    this.password=this.signupForm.value.userdata.password;
    this.subscription=this.signupForm.value.userdata.subscription;
    this.detailService.userdetails(this.email,this.password,this.subscription);
   
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

